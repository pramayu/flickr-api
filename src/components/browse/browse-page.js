import React, { Component } from 'react';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';

import { getBrowsePhotos } from '../../actions/browse';
import BrowseList from './browse-list';

class BrowserPage extends Component {

  componentDidMount() {
    this.props.getBrowsePhotos(this.props.params.term)
  }

  render() {
    const photos = (
      this.props.photos.map((photos) =>
        photos.map((photo, id) =>
          <BrowseList photo={photo} key={id} />
        )
      )
    );

    const masonryOptions = {
        transitionDuration: 0
    };

    return (
      <div className="container boo_">
        <Masonry className={'nerw bar'} elementType={'ul'} options={masonryOptions} disableImagesLoaded={false} updateOnEachImageLoad={false} >
          { photos }
        </Masonry>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    photos: state.browse
  }
}

BrowserPage.propTypes = {
  photos: React.PropTypes.array.isRequired,
  getBrowsePhotos: React.PropTypes.func.isRequired
}

export default connect(mapStateToProps, { getBrowsePhotos })(BrowserPage);
