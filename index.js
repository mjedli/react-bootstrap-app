import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Hello from './Hello';
import Toolbar from './toolbar/Toolbar';
import Footer from './footer/Footer';
import Table from './table/Table';
import TableComponent from './table-component/TableComponent';
import './style.css';


class App extends Component {

  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
      <Router>
        <Toolbar title={this.state.name}/>
        <div align="center">
          <Hello name={this.state.name} />
          <p>
            Start editing to see some magic happen :)
          </p>
          <br/><br/>
        </div>
        <div align="center">
          <TableComponent refresh/>
        </div>
        <Footer/>
      </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
