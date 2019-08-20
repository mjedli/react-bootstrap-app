import React, { Component } from 'react';
import { render } from 'react-dom';
import './toolbar.css';

class Toolbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  searchLabel = "Search";
  searchValue = "";

  render() {
    return (
      
      <nav className="Toolbar" class="navbar  toolbar-app">
        <a class="navbar-brand">{this.props.title}</a>
        <form class="form-inline">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={this.searchValue} name="searchValue" />
          <button  onClick={() => this.setState({value: 'X'})} class="btn btn-outline-success my-2 my-sm-0" type="submit">{this.searchLabel}</button>
        </form>
      </nav>

    );
  }
}

export default Toolbar;