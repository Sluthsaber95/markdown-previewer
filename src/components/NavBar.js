import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <div>
          <h1 className="roboto-title-20px logo-first">Markdown</h1>
          <h1 className="roboto-title-20px logo-last">Previewer</h1>
        </div>
      </nav>
    );
  }
}
export default NavBar;