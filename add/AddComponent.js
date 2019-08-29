import React, { Component } from 'react';
import { render } from 'react-dom';
import AppService from '../AppService';
import './add-component.css';

class AddComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      appService : AppService,
      currentComponent : {id : 0, title : "", adresse : "", type : "false"},
    };
  }

  add = () => {
    this.state.appService.addComponent(this.state.currentComponent);
    this.props.history.push('/');
  }

  cancel = () => {
    this.props.history.push('/');
  }
  
  titleChangeEvent(event) {
    this.state.currentComponent.title = event.target.value;
  }

  addressChangeEvent(event) {
    this.state.currentComponent.adresse = event.target.value;
  }

  typeChangeEvent(event) {
    this.state.currentComponent.type = event.target.checked.toString();
  }

  render() {
    return (
      
      <div class="col col-sm col-md col-lg col-xl tab-app-add" align="left">
      <form>

        <div class="form-group">
          <label for="exampleInputEmail1">Title</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter title" name="currentComponent.title"
          onChange={(e)=>{this.titleChangeEvent(e)}} />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Address</label>
          <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter address"
          onChange={(e)=>{this.addressChangeEvent(e)}}
          name="currentComponent.adresse"/>
        </div>

        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" onChange={(e)=>{this.typeChangeEvent(e)}} name="currentComponent.type"/>
          <label class="form-check-label" for="exampleCheck1">Type</label>
        </div>
        <div align="right">
          <button type="button" onClick={this.cancel } class="btn btn-info">Cancel</button>
          &nbsp;
          <button type="submit" class="btn btn-primary" onClick={this.add } >Add</button>
        </div>
      </form>
      </div>

    );
  }
}

export default AddComponent;