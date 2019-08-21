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
    };

    this.state.list = this.state.appService.getAll();

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
            <th scope="col" colspan="2">Type</th>
          </tr>
        </thead>
        <tbody>

          {this.state.list.map((comp) =>
              <tr>
              <th scope="row">{comp.id}</th>
              <td>{comp.title}</td>
              <td>{comp.adresse}</td>
              <td>{comp.type}</td>
              </tr>
            )}

        </tbody>
      </table>
      </div>

    );
  }
}

export default Table;