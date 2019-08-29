import React, { Component } from 'react';
import { render } from 'react-dom';
import './add-component.css';

class AddComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dateCopyright: new Date().getFullYear(),
    };
  }

  cancel = () => {
    this.props.history.push('/');
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
          <input type="checkbox" class="form-check-input" id="exampleCheck1" value="{{currentComponent.type}}" name="currentComponent.type"/>
          <label class="form-check-label" for="exampleCheck1">Type</label>
        </div>
        <div align="right">
          <button type="button" onClick={this.cancel } class="btn btn-info">Cancel</button>
          &nbsp;
          <button type="submit" class="btn btn-primary" >Add</button>
        </div>
      </form>
      </div>

    );
  }
}

export default AddComponent;