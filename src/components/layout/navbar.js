import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a href="#" className="navbar-brand">Selter</a>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Join</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
