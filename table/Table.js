import React, { Component } from 'react';
import { render } from 'react-dom';
import './table.css';

class Table extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dateCopyright: new Date().getFullYear(),
    };
  }

  copyright = "Copyright";

  list = [
    {id : 1, title : "title 3", adresse : "address 1", type : true},
    {id : 2, title : "title 2", adresse : "address 4", type : false},
    {id : 3, title : "title 1", adresse : "address 3", type : false},
    {id : 4, title : "title 4", adresse : "address 2", type : false},
    {id : 5, title : "title 5", adresse : "address 5", type : false},
    {id : 6, title : "title 6", adresse : "address 7", type : true},
    {id : 7, title : "title 8", adresse : "address 6", type : false},
    {id : 8, title : "title 7", adresse : "address 9", type : false},
    {id : 9, title : "title 9", adresse : "address 8", type : false},
  ];

 createTable = () => {
    let table = []

    // Outer loop to create parent
    for (let i = 0; i < this.list.length; i++) {
      let children = []
      //Inner loop to create children
      for (let j = 0; j < 5; j++) {
        children.push(<td>{`Column ${j + 1}`}</td>)
      }
      //Create the parent and add the children
      table.push(<tr>{children}</tr>)
    }
    return table
  }

  render() {
    return (
  
<div class="tab-app">
<table class="table table-striped tab-app col col-sm col-md col-lg col-xl">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col"><a >Title<i class="material-icons">swap_vert</i></a></th>
      <th scope="col"><a >Address<i class="material-icons">swap_vert</i></a></th>
      <th scope="col" colspan="2">Type</th>
    </tr>
  </thead>
  <tbody>

     {this.list.map(function(comp){
        return 
        <tr>
        <th scope="row">{comp.id}</th>
        <td>{comp.title}</td>
        <td>{comp.adresse}</td>
        <td>{comp.type}</td>;
        </tr>
      })}

  </tbody>
</table>
</div>

    );
  }
}

export default Table;