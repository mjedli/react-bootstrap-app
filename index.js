import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Toolbar from './toolbar/Toolbar';
import Footer from './footer/Footer';
import Table from './table/Table';
import TableComponent from './table-component/TableComponent';
import AppRoute from './AppRoute';
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
        <Toolbar title={this.state.name}/>
        <div align="center">
          <Hello name={this.state.name} />
          <p>
            Start editing to see some magic happen :
          </p>
          <br/><br/>
        </div>
        <div align="center">
          <TableComponent />
        </div>
        <div align="center">

        </div>
        <div align="center">
          <Table />
        </div>
        <Footer/>
      </div>
    );
  }
}

render(<AppRoute />, document.getElementById('root'));
