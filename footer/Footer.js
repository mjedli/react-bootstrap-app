import React, { Component } from 'react';
import { render } from 'react-dom';
import './footer.css';

class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dateCopyright: new Date().getFullYear(),
    };
  }

  copyright = "Copyright";

  render() {
    return (
      
      <footer class="footer-app">
        <div align="center">{this.copyright}&nbsp;{this.state.dateCopyright}&nbsp;&copy;</div>
      </footer>

    );
  }
}

export default Footer;