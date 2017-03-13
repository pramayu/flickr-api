import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import LazyLoad from 'react-lazyload';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classnames from 'classnames';

const masonryOptions = {
    transitionDuration: 0
};

class RandomCard extends Component {
  render() {
    let random = this.props.photo.map((photo, id) =>
      <div className="img_ col-md-4" key={photo.id}>
        <img src={photo.urls.small} alt={photo.user.bio}/>
        <div className="hovr">
          <div className="users">
            <img src={photo.user.profile_image.medium} alt=""/>
            <span className="name">{photo.user.name}</span>
          </div>
          <div className="collect">
            <button className="btn-collect btn"></button>
          </div>
        </div>
      </div>
    );

    return (
      <div className="ite-sora">
        <Masonry className={'grids'} elementType={'div'} options={masonryOptions} disableImagesLoaded={false} updateOnEachImageLoad={false} >
          {random}
        </Masonry>
      </div>
    )
  }
}

export default RandomCard;
