import React, { Component } from 'react';
import { render } from 'react-dom';
import './remove-component.css';

class RemoveComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dateCopyright: new Date().getFullYear(),
    };
  }

  render() {
    return (
      
      <div class="col col-sm col-md col-lg col-xl tab-app" align="left">
      <form>
        <div class="form-group">
          Do you want to remove this component!
        </div>
        <div align="right">
          <button type="button" routerLink="/" class="btn btn-info">Cancel</button>
          &nbsp;
          <button type="submit" class="btn btn-primary" >Remove</button>
        </div>
      </form>
      </div>

    );
  }
}

export default RemoveComponent;