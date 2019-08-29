import React, { Component } from 'react';
import { render } from 'react-dom';
import AppService from '../AppService';
import './alert-component.css';

class AlertComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      appService : AppService,
      alertMessage : "";
    };
    alertMessage = this.state.appService.getAlertMessage();
  }

  render() {
    return (
      
      <div class="col col-sm col-md col-lg col-xl tab-app" align="left">
      <form>
        <div class="form-group">
          {this.state.alertMessage}
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