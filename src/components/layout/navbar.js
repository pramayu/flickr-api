import React, { Component } from 'react';
import { Link } from 'react-router';
import SearchForm from '../search/search-form';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar navbar-default custom-nav">
        <div className="container-fluid custom-container">
          <div className="navbar-search">
            <ul className="list-inline">
              <li className="menu">
                <span className="fa fa-ellipsis-h" aria-hidden="true" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"></span>
                <ul className="dropdown-menu ciecie" aria-labelledby="dropdownMenu1">
                  <li><a href="/photos/popular">Popular</a></li>
                  <li><a href="/photos/latest">Latest</a></li>
                  <li><a href="#">Explore</a></li>
                  <li><a href="#">Collections</a></li>
                </ul>
              </li>
              <li className="srct">
                <SearchForm />
              </li>
            </ul>
          </div>
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">SPATULAEMAK</Link>
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
