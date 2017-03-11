import React, { Component } from 'react';

import Navbar from './layout/navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App;
