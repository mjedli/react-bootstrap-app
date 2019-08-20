import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Test from './test';
import Toolbar from './toolbar/Toolbar';
import Footer from './footer/Footer';
import TableComponent from './table-component/TableComponent';
import './style.css';


class App extends Component {

  message="test";

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
        </div>
        <TableComponent />
        <Footer/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
