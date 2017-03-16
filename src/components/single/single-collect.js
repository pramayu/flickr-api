import React, { Component } from 'react';

class SingleCollect extends Component {
  render() {

    const { collection, id } = this.props;

    const inlineStyle = {
      backgroundImage: 'url(' + collection.cover_photo.urls.small + ')',
    }

    return (
      <div className="conf">
        <div className="col-md-4 cler" style={ collection.cover_photo === null ? '':inlineStyle }>
          <div className="dfhk">
            <div className="imre">
              <img src={ collection.user.profile_image.medium } alt=""/>
              <span className="ng-name">{ collection.user.name }</span>
            </div>
            <div className="oer">
              <span className="count_photo">{collection.total_photos} photos</span>
            </div>
            <div className="clear"></div>
            <div className="beft">
              <p className="newp">#{ collection.title }</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SingleCollect;
