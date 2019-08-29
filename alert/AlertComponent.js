import React, { Component } from 'react';
import { render } from 'react-dom';
import './alert-component.css';

class AlertComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dateCopyright: new Date().getFullYear(),
    };
  }

  copyright = "Copyright";

  render() {
    return (
      
      <div class="col col-sm col-md col-lg col-xl tab-app" align="left">
      <form>
        <div class="form-group">
          {{alertMessage}}
        </div>
        <div align="right">
          <button type="button" routerLink="/" class="btn btn-info">Cancel</button>
        </div>
      </form>
      </div>

    );
  }
}

export default AlertComponent;