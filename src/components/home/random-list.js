import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class RandomList extends Component {

  singleLink(id) {
    browserHistory.push(`/photo/${id}`)
  }

  render() {
    const { photo } = this.props;
    return (
      <li className="ite col-md-4 img_">
        <img src={photo.urls.small} alt={photo.user.bio}/>
          <div className="hovr" onClick={() => this.singleLink(photo.id)}>
            <div className="users">
              <img src={photo.user.profile_image.medium} alt=""/>
              <span className="name">{photo.user.name}</span>
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

RandomList.propTypes = {
  photo: React.PropTypes.object.isRequired
}

export default RandomList;
