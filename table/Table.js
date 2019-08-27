import React, { Component } from 'react';
import { render } from 'react-dom';
import './table.css';
import AppService from '../AppService';

class Table extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dateCopyright: new Date().getFullYear(),
      appService : AppService,
      list : [],
      currentId : 0
    };

    this.state.list = this.state.appService.getAll();

    this.state.currentId = this.state.appService.getCurrentId();

  }


  onSelectRow(id, event) {
    console.log("test " + event.target.checked );
    if(event.target.checked === true) {
      console.log("test2");
      this.state.appService.setCurrentId(id);
    } else {
      this.state.appService.setCurrentId(0);
    }
  }

  render() {
    return (
  
      <div className="Table" class="tab-app">
      <table class="table table-striped tab-app col col-sm col-md col-lg col-xl">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col"><a >Title<i class="material-icons">swap_vert</i></a></th>
            <th scope="col"><a >Address<i class="material-icons">swap_vert</i></a></th>
            <th scope="col" colSpan="2">Type</th>
          </tr>
        </thead>
        <tbody>

          {this.state.list.map((comp) =>
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
      </div>

    );
  }
}

export default Table;