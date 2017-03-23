import React, { Component } from 'react';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';

import { getBrowsePhotos, getLoadBrowse } from '../../actions/browse';
import BrowseList from './browse-list';
import Jumbroton from './jumbroton';

class BrowserPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 2
    }
  }

  componentDidMount() {
    this.props.getBrowsePhotos(this.props.params.term)
  }

  onLoad() {
    this.setState({
      page: this.state.page + 1
    })
    this.props.getLoadBrowse(this.props.params.term, this.state.page)
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
        <Jumbroton term={this.props.params.term}/>
        <Masonry className={'nerw bar'} elementType={'ul'} options={masonryOptions} disableImagesLoaded={false} updateOnEachImageLoad={false} >
          { photos }
        </Masonry>
        <div className="pagenation">
          <button onClick={() => this.onLoad() } className="btn btn-add-page">LOAD MORE</button>
        </div>
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

export default connect(mapStateToProps, { getBrowsePhotos, getLoadBrowse })(BrowserPage);
