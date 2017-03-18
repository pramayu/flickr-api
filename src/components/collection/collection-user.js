import React, { Component } from 'react';

class CollectionUser extends Component {
  render() {

    const { user } = this.props;

    return (
      <div className="_wow">
        <div className="bil">
          <div className="user-frame">
            <img className="fol" src={user.user.profile_image.large} alt=""/>
            <p className="serbet">{ user.user.name }</p>
            <span className="pto" id="total_photos">{ user.total_photos } photos</span>
          </div>
        </div>
      </div>
    )
  }
}

export default CollectionUser;
