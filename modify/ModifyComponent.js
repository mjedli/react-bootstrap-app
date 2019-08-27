import React, { Component } from 'react';
import { render } from 'react-dom';
import AppService from '../AppService';
import './modify-component.css';

class ModifyComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dateCopyright: new Date().getFullYear(),
      appService : AppService,
      currentComponent : {id : 0, title : "", adresse : "", type : "false"},
    };

    if(this.state.appService.getCurrentId() !== 0)
    this.state.currentComponent = this.state.appService.get(this.state.appService.getCurrentId());
  }

  modifyComponent() {
    this.state.appService.modifiyComponent(this.state.currentComponent);
  }

_handleChangeEvent(event) {
  console.log(event.target.value);
        this.state.currentComponent.title = event.target.value;
      }

  render() {
    return (
      
      <div class="col col-sm col-md col-lg col-xl tab-app-add" align="left">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Title</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter title" defaultValue ={this.state.currentComponent.title} name="currentComponent.title"
          onChange={(e)=>{this._handleChangeEvent(e)}} />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Address</label>
          <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter address"
        defaultValue ={this.state.currentComponent.adresse}
          name="currentComponent.adresse"/>
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" defaultValue ={this.state.currentComponent.type} name="currentComponent.type"/>
          <label class="form-check-label" for="exampleCheck1">Type</label>
        </div>
        <div align="right">
          <button type="button" routerLink="/" class="btn btn-info">Cancel</button>
          &nbsp;
          <button type="button" class="btn btn-primary" onClick={this.modifyComponent()}>Add</button>
        </div>
      </form>
      </div>

    );
  }
}

export default ModifyComponent;