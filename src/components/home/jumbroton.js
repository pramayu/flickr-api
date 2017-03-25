import React, { Component } from 'react';

class Jumbroton extends Component {
  render() {
    return (
      <div className="bye-bye">
        <div className="container-fluid custom-container">
          <div className="myboo">
            <div className="myboo-container">
              <h1>FREE STOCK PHOTOS WITH BEST QUALITY AND HIGH RESOLUTION</h1>
              <ul className="list-inline osuru">
                <span>Popular Search:</span>
                <li><a href="/search/nature">Nature</a></li>
                <li><a href="/search/party">Party</a></li>
                <li><a href="/search/healthy">Healthy</a></li>
                <li><a href="/search/businessman">Businessman</a></li>
                <li><a href="/search/creative">Creative</a></li>
                <li><a href="/search/technology">Technology</a></li>
                <li><a href="/search/landscape">Landscape</a></li>
                <li><a href="/search/food">Food</a></li>
              </ul>
              <button className="btn btn-foo">EXPLORE</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Jumbroton;
