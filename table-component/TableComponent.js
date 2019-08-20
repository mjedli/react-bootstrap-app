import React, { Component } from 'react';
import { render } from 'react-dom';
import './table-component.css';

class TableComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dateCopyright: new Date().getFullYear,
    };
  }

  copyright = "Copyright";

  render() {
    return (
      
      <footer class="footer-app">
        <div align="center">{this.copyright}&nbsp;&copy;{this.state.dateCopyright}</div>
      </footer>

    );
  }
}

export default TableComponent;