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
test
  </div>

    );
  }
}

export default TableComponent;