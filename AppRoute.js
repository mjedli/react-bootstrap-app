import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Table from './table/Table'
import Add from './add/Add'

class AppRoute extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dateCopyright: new Date().getFullYear(),
    };
  }

  copyright = "Copyright";

  render() {
    return (
      
        <Router>
            <div>
                <Route exact path="/" component={Table}/>
                <Route path="/add" component={Add}/>
            </div>
        </Router>

    );
  }
}

export default AppRoute;