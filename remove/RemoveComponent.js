import React, { Component } from 'react';
import { render } from 'react-dom';
import AppService from '../AppService';
import './remove-component.css';

class RemoveComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      appService : AppService,
      currentComponent : {id : 0, title : "", adresse : "", type : "false"},
      messageAlert : "You should select a component !"
    };

    if(this.state.appService.getCurrentId() !== 0) {
      this.state.currentComponent = this.state.appService.get(this.state.appService.getCurrentId());
    } else {
      this.state.appService.setAlertMessage(this.state.messageAlert);
      this.props.history.push('/alert');
    }
  }
  
  cancel = () => {
    this.props.history.push('/')
  }

  remove = () => {
    this.state.appService.removeComponent(this.state.currentComponent);
    this.props.history.push('/')
  }

  render() {
    return (
      
      <div class="col col-sm col-md col-lg col-xl tab-app-remove" align="left">
      <form>
        <div class="form-group">
          Do you want to remove this component!
        </div>
        <div align="right">
          <button type="button" onClick={this.cancel } class="btn btn-info">Cancel</button>
          &nbsp;
          <button type="submit" onClick={this.remove } class="btn btn-primary" >Remove</button>
        </div>
      </form>
      </div>

    );
  }
}

export default RemoveComponent;