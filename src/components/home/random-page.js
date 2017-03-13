import React, { Component } from 'react';
import { connect } from 'react-redux';

import RandomList from './random-list';
import Jumbroton from './jumbroton';
import { getRandomPhotos } from '../../actions/unsplash';

class RandomPage extends Component {

  componentDidMount() {
    this.props.getRandomPhotos();
  }

  render() {
    return (
      <div className="container-fluidk solo">
        <Jumbroton />
        <RandomList photos={this.props.photos}/>
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


export default connect(mapStateToProps, { getRandomPhotos })(RandomPage);
