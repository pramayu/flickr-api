import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class CollectionList extends Component {

  singleLink(id) {
    browserHistory.push(`/photo/${id}`)
  }

  render() {
    return (
      <li className='col-md-4 fogf'>
        <img className='cta' src={this.props.collection.urls.small} alt=""/>
        <div className="htf" onClick={() => this.singleLink(this.props.collection.id)}>
          <div className="os">
            <img src={this.props.collection.user.profile_image.medium} alt=""/>
            <span className="mn">{this.props.collection.user.name}</span>
          </div>
          <div className="collect">
            <ul className="list-inline">
              <li><button className="btn-collect btn"></button></li>
              <li><button className="btn-download btn"></button></li>
            </ul>
          </div>
        </div>
      </li>
    )
  }
}

export default CollectionList;
