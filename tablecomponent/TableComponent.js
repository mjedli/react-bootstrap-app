import React, { Component } from 'react';
import { render } from 'react-dom';
import './tablecomponent.css';

class TableComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  title = "Copyright";

  render() {
    return (
      
    <div align="center" class ="tab-app col col-sm col-md col-lg col-xl tab-app">
        <ul class="nav nav-tabs">
        <li class="nav-item">
          <a>test<i class="material-icons">autorenew</i></a>
        </li>
      </ul>
      <div align="right">
        <div class="btn-group" role="group" aria-label="Basic example">
          <button  type="button" class="btn btn-secondary">Add<i class="material-icons">add</i></button>
          <button  type="button" class="btn btn-secondary">Modify<i class="material-icons">autorenew</i></button>
          <button  type="button" class="btn btn-secondary">Remove<i class="material-icons"><i class="material-icons">remove_circle_outline</i></i></button>
        </div>
      </div>
    </div>

    );
  }
}

export default TableComponent;