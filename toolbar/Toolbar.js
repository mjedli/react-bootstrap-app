import React, { Component } from 'react';
import { render } from 'react-dom';
import AppService from '../AppService';
import './toolbar.css';

class Toolbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      appService : AppService,
    };
  }

  searchLabel = "Search";
  searchValue = "";


  search() {
    this.state.appService.setSearchValue(this.searchValue);
    this.props.history.push('/');
  }

  searchValueChangeEvent(event) {
    this.searchValue = event.target.value;
  }

  render() {
    return (
      
      <nav className="Toolbar" class="navbar  toolbar-app">
        <a class="navbar-brand">{this.props.title}</a>
        <form class="form-inline">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" defaultValue={this.searchValue} onChange={(e) => this.searchValueChangeEvent(e)} name="searchValue" />
          <button  onClick={() => this.search()} class="btn btn-outline-success my-2 my-sm-0" type="boutton">{this.searchLabel}</button>
        </form>
      </nav>

    );
  }
}

export default Toolbar;