import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    window.location.href = `/search/${this.state.search}`;
    e.preventDefault();
  }

  render() {
    return (
      <form action="" id="quick" method="post" onSubmit={this.handleSubmit.bind(this)}>
        <span className="loop_"></span>
        <input type="text" name="search" value={ this.state.search } id="search_data" onChange={this.handleChange.bind(this)} className="search-photo"
          autoComplete="off" spellCheck="false" placeholder="Search"/>
      </form>
    )
  }
}

export default SearchForm;
