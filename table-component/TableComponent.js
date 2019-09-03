import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Table from '../table/Table'
import AddComponent from '../add/AddComponent'
import ModifyComponent from '../modify/ModifyComponent'
import RemoveComponent from '../remove/RemoveComponent'
import AlertComponent from '../alert/AlertComponent'
import AppService from '../AppService';
import './table-component.css';

class TableComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      appService : AppService,
       refresh : false
    };
  }

  title = "Component";

  update = () => {
    this.state.appService.setSearchValue("");
    this.state.refresh = true;
  }

  render() {
    return (
    
    
    <div className="TableComponent" class ="tab-app">

      <Router>

        <div align="center" class ="col col-sm col-md col-lg col-xl">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <Link class="nav-link active" onClick={() => this.update()} to="/">{this.title}
              <i class="material-icons">autorenew</i></Link>
            </li>
          </ul>
          <div align="right">
            <div class="btn-group" role="group" aria-label="Basic example">
              <button  type="button" class="btn btn-secondary"><Link class="link-modify" to="/add">Add<i class="material-icons">add</i></Link></button>
              <button  type="button" class="btn btn-secondary"><Link  class="link-modify" to="/modify">Modify<i class="material-icons">autorenew</i></Link></button>
              <button  type="button" class="btn btn-secondary"><Link class="link-modify" to="/remove">Remove<i class="material-icons"><i class="material-icons">remove_circle_outline</i></i></Link></button>
            </div>
          </div>
        </div>

          <Route exact path="/" component={() => <Table refresh={this.state.refresh}/>} />
          <Route path="/add" component={AddComponent}/>
          <Route path="/modify" component={ModifyComponent}/>
          <Route path="/remove" component={RemoveComponent}/>
          <Route path="/alert" component={AlertComponent}/>

      </Router>

    </div>

    );
  }
}

export default TableComponent;