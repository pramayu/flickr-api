import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar navbar-default custom-nav">
        <div className="container-fluid custom-container">
          <div className="navbar-search">
            <ul className="list-inline">
              <li className="menu"><span className="fa fa-ellipsis-h" aria-hidden="true"></span></li>
              <li className="srct">
                <form action="" id="quick" method="post">
              <span className="loop_"></span>
              <input type="text" name="typeahead" id="search_data" className="search-photo" autoComplete="false" spellCheck="false" placeholder="Search"/>
            </form>
              </li>
            </ul>
          </div>
          <div className="navbar-header">
            <a href="#" className="navbar-brand">SPATULAEMAK</a>
          </div>
          <ul className="nav navbar-nav">
            <li className="login btr">
              <a href="#">Login</a>
            </li>
            <li className="signup btr">
              <a href="#">Join</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
