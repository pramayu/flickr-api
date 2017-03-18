import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import _ from 'lodash';

class SingleCollect extends Component {

  collectionLink(id, slug) {
    const new_slug = slug.replace(/[/\s+\.#?_@<>]/g, '-').toLowerCase();
    browserHistory.push(`/collections/${id}/${new_slug}`)
  }

  render() {

    const { collection, id } = this.props;

    const inlineStyle = {
      backgroundImage: 'url(' + collection.cover_photo.urls.small + ')',
    }

    return (
      <div className="conf">
        <div className="col-md-4 cler" style={ _.isEmpty(collection.cover_photo) === true ? '' : inlineStyle }>
          <div className="dfhk" onClick={() => this.collectionLink(collection.id, collection.title)}>
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
