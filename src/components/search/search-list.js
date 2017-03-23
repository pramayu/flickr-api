import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class SearchList extends Component {

  singleLink(id) {
    browserHistory.push(`/photo/${id}`)
  }

  render() {
    const { photo } = this.props;
    return (
      <li className="col-md-4 hooo">
        <img src={photo.urls.small} alt="" className="ku"/>
        <div className="hovr" onClick={() => this.singleLink(photo.id)}>
          <div className="users">
            <img src={ photo.user.profile_image.medium } alt="" />
            <span className="name">{ photo.user.name }</span>
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

export default SearchList;
