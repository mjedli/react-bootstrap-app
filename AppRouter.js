import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Table from './table/Table';
import Add from './add/Add';

function Table() {
  return <Table />;
}

function Add() {
  return <Add />;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Table} />
        <Route path="/table/" component={Table} />
        <Route path="/add/" component={Add} />
      </div>
    </Router>
  );
}

export default AppRouter;