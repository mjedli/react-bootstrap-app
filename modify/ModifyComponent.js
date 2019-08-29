import React, { Component } from 'react';
import { render } from 'react-dom';
import { Redirect } from 'react-router-dom'
import AppService from '../AppService';
import './modify-component.css';

class ModifyComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dateCopyright: new Date().getFullYear(),
      appService : AppService,
      currentComponent : {id : 0, title : "", adresse : "", type : "false"}
    };

    if(this.state.appService.getCurrentId() !== 0)
    this.state.currentComponent = this.state.appService.get(this.state.appService.getCurrentId());
    
  }

  modify = () => {
    this.state.appService.modifiyComponent(this.state.currentComponent);
    this.props.history.push('/')
  }

  cancel = () => {
    this.props.history.push('/')
  }

  titleChangeEvent(event) {
    this.state.currentComponent.title = event.target.value;
  }

  addressChangeEvent(event) {
    this.state.currentComponent.adresse = event.target.value;
  }

  typeChangeEvent(event) {
    this.state.currentComponent.type = event.target.checked.toString();
    console.log(this.state.currentComponent.type);
  }

  render() {

    return (
      
      <div class="col col-sm col-md col-lg col-xl tab-app-add" align="left">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Title</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter title" defaultValue ={this.state.currentComponent.title} name="currentComponent.title"
          onChange={(e)=>{this.titleChangeEvent(e)}} />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Address</label>
          <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter address" defaultValue ={this.state.currentComponent.adresse} 
          onChange={(e)=>{this.addressChangeEvent(e)}}
          name="currentComponent.adresse"/>
        </div>
        <div class="form-group form-check">

          {("true" === this.state.currentComponent.type ) ? (
            <input type="checkbox" class="form-check-input" id="exampleCheck1" defaultChecked={true} name="currentComponent.type" onChange={(e)=>{this.typeChangeEvent(e)}}/>
          ) :(
            <input type="checkbox" class="form-check-input" id="exampleCheck1" defaultChecked={false} name="currentComponent.type" onChange={(e)=>{this.typeChangeEvent(e)}}/>
          )}

          <label class="form-check-label" for="exampleCheck1">Type</label>
        </div>
        <div align="right">
          <button type="button" onClick={this.cancel } class="btn btn-info">Cancel</button>
          &nbsp;
          <button type="button" class="btn btn-primary" onClick={this.modify }>Add</button>
        </div>
      </form>
      </div>

    );

  }
}

export default ModifyComponent;