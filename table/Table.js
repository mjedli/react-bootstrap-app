import React, { Component } from 'react';
import { render } from 'react-dom';
import './table.css';
import AppService from '../AppService';

class Table extends Component {

  myComponent = [];

  numberPages = 1;
  numberElement = 4;
  listOfPage = [];
  currentPage= 1;
  maxPage = 1;

  setTitleTri = true;
  setTitleAdresse = true;

  constructor(props) {
    super(props);
    this.onSelectRow = this.onSelectRow.bind(this);
    this.state = {
      appService : AppService,
      currentId : 0,
      searchvalue : ""
    };
    this.state.currentId = this.state.appService.getCurrentId();
    this.updateComponent();
  }

  onSelectRow = (id, event) => {
    if(event.target.checked === true) {
      this.state.appService.setCurrentId(id);
    } else {
      this.state.appService.setCurrentId(0);
    }
    this.props.update();
  }

  getAllComponentPerPage = (start) => {

    let allComponent = [];
    allComponent = this.state.appService.getAll();

    this.myComponent = [];

    for (var t = (start-1)*this.numberElement; t < start*this.numberElement; t++) {
      if(allComponent[t] != null)
      this.myComponent.push(allComponent[t]);
    }

    this.currentPage = start;
    // refresh
    this.forceUpdate();
  }

  getAllComponentPrevPage = () => {
    if(this.currentPage > 1) {
      this.getAllComponentPerPage(this.currentPage-1);
    } 
  }

  getAllComponentNextPage = () => {
    if(this.currentPage < this.maxPage) {
      this.getAllComponentPerPage(this.currentPage+1);
    } 
  }

  getAllComponentPerPageTri = (byTitle, byAdresse) => {
    let allComponent
    allComponent = this.state.appService.getAll();

    if(byTitle) {
      this.sortListByTitle(allComponent);
    }
    
    if(byAdresse) {
      this.sortListByAdresse(allComponent);
    }

    this.myComponent = [];

    for (var t = (this.currentPage-1)*this.numberElement; t < this.currentPage*this.numberElement; t++) {
      if(allComponent[t] != null)
      this.myComponent.push(allComponent[t]);
    }
    this.forceUpdate();
  }

  sortListByTitle = (myListComponent) => {
    if(this.setTitleTri) {
      myListComponent.sort((a, b) => (a.title > b.title) ? 1 : -1);
      this.setTitleTri = false;
    } else {
      myListComponent.sort((a, b) => (a.title < b.title) ? 1 : -1);
      this.setTitleTri = true;
    }
  }

  sortListByAdresse = (myListComponent)  => {
    if(this.setTitleAdresse) {
      myListComponent.sort((a, b) => (a.adresse > b.adresse) ? 1 : -1);
      this.setTitleAdresse = false;
    } else {
      myListComponent.sort((a, b) => (a.adresse < b.adresse) ? 1 : -1);
      this.setTitleAdresse = true;
    }
  }

  updateComponent  = () => {

    this.myComponent = [];

    this.numberPages = 1;
    this.numberElement = 4;
    this.listOfPage = [];
    this.currentPage= 1;
    this.maxPage = 1;

    let allComponent = [];
    let start = 1;

    allComponent = this.state.appService.getAll();

    this.myComponent = [];

    for (var t = (start-1)*this.numberElement; t < start*this.numberElement; t++) {
      if (allComponent[t] != null)
      this.myComponent.push(allComponent[t]);
    }

    let count = 0;
    for (var t = 0; t < allComponent.length; t++) {
        count = count +1;
        if (count === this.numberElement) {
          this.numberPages = this.numberPages+1;
          count = 0;
        }
    }

    if (count !== 0) {
      this.numberPages = this.numberPages+1;
    }

    for (var i = 1; i <= this.numberPages-1; i++) {
        this.listOfPage.push(i);
        this.maxPage = i;
    }
  }

  render() {
    return (
  
      <div className="Table" class="tab-app">
      <table class="table table-striped tab-app col col-sm col-md col-lg col-xl">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col"><a onClick={() => this.getAllComponentPerPageTri(true,false)}>Title<i class="material-icons">swap_vert</i></a></th>
            <th scope="col"><a onClick={() => this.getAllComponentPerPageTri(false,true)}>Address<i class="material-icons">swap_vert</i></a></th>
            <th scope="col" colSpan="2">Type</th>
          </tr>
        </thead>
        <tbody>

          {this.myComponent.map((comp) =>
            <tr>
            <th scope="row">{comp.id}</th>
            <td>{comp.title}</td>
            <td>{comp.adresse}</td>
            <td>{comp.type}</td>
            {(comp.id === this.state.currentId) ? (
                <td><input type="checkbox"  checked onChange={(e) => {this.onSelectRow(comp.id, e)}} /></td>
              ) :(
              <td><input type="checkbox"  onChange={(e) => {this.onSelectRow(comp.id, e)}}  /></td>
              )}
            </tr>
          )}

        </tbody>
      </table>

      <div align="center" class="tab-app-table">
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-right">
            <li class="page-item">
              <a onClick={() => this.getAllComponentPrevPage()} class="page-link" href="#" aria-label="Previous">
                <span  aria-hidden="true">&laquo;</span>
              </a>
            </li>

            {this.listOfPage.map((number) =>
                <span>
                {(number === this.currentPage) ? (
                  <li class="page-item active">
                    <a onClick={() => this.getAllComponentPerPage(number)} class="page-link" href="#">{number}</a>
                  </li>
                ) :(
                  <li class="page-item">
                    <a onClick={() => this.getAllComponentPerPage(number)} class="page-link" href="#">{number}</a>
                  </li>
                )}
                </span>
            )}

            <li class="page-item">
              <a onClick={() => this.getAllComponentNextPage()} class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      </div>
    );
  }
}

export default Table;