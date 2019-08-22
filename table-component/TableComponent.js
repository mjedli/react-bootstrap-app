import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Table from '../table/Table'
import AddComponent from '../add/AddComponent'
import './table-component.css';

class TableComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  title = "Component";

  render() {
    return (
    
    
    <div className="TableComponent" class ="tab-app">
    <Router>
    <div align="center" class ="col col-sm col-md col-lg col-xl">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a  class="nav-link active" href="#"><Link to="/">{this.title}
          <i class="material-icons">autorenew</i></Link></a>
        </li>
      </ul>
      <div align="right">
        <div class="btn-group" role="group" aria-label="Basic example">
          <Link to="/add"><button  type="button" class="btn btn-secondary">Add<i class="material-icons">add</i></button></Link>
          <button  type="button" class="btn btn-secondary">Modify<i class="material-icons">autorenew</i></button>
          <button  type="button" class="btn btn-secondary">Remove<i class="material-icons"><i class="material-icons">remove_circle_outline</i></i></button>
        </div>
      </div>
    </div>

                <Route exact path="/" component={Table}/>
                <Route path="/add" component={AddComponent}/>

    </Router>
    </div>

    );
  }
}

export default TableComponent;