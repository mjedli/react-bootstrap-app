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

  render() {
    return (
      
      <footer class="footer-app">
        <div align="center">{this.copyright}&nbsp;{this.state.dateCopyright}&nbsp;&copy;</div>
      </footer>

    );
  }
}

export default AddComponent;