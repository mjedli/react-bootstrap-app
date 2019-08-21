import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Table from './table/Table'
import Add from './add/Add'

class AppRouter extends Component {

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
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
            </div>
        </Router>

    );
  }
}

export default AppRouter;