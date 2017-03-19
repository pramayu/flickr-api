import React, { Component } from 'react';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';
import RandomList from './random-list';
import Jumbroton from './jumbroton';
import { getRandomPhotos, getLoadPhotos } from '../../actions/unsplash';

const masonryOptions = {
    transitionDuration: 0
};

class RandomPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 2,
      loads: {}
    }
  }

  loadPage() {
    this.setState({
      page: this.state.page + 1,
      loads: this.props.getLoadPhotos(this.state.page)
    });
  }

  componentDidMount() {
    this.props.getRandomPhotos(this.state.page);
  }

  render() {
    let photos = (
      this.props.photos.map((photos) =>
        photos.map((photo, id) =>
          <RandomList photo={photo} key={id} />
        )
      )
    )
    return (
      <div className="container-fluid solo">
        <Jumbroton />
        <Masonry className={'gridk bar'} elementType={'ul'} options={masonryOptions} disableImagesLoaded={false} updateOnEachImageLoad={false} >
          { photos }
        </Masonry>
        <div className="pagenation">
          <button onClick={this.loadPage.bind(this)} className="btn btn-add-page">LOAD MORE</button>
        </div>
      </div>
    )
  }
}

RandomPage.propTypes = {
  getRandomPhotos: React.PropTypes.func.isRequired,
  photos: React.PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    photos: state.random_photos
  }
}


export default connect(mapStateToProps, { getRandomPhotos, getLoadPhotos })(RandomPage);
