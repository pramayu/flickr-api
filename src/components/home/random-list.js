import React, { Component } from 'react';
import RandomCard from './random-card';

class RandomList extends Component {
  render() {

    const photos_ext = (
      <div className="grider">
        { this.props.photos.map((photo, id) => <RandomCard photo={photo} key={id} />) }
      </div>
    );

    return (
      <div className="ite">
        <div className="container-fluid custom-container">
          {photos_ext}
        </div>
      </div>
    )
  }
}

RandomList.propTypes = {
  photos: React.PropTypes.array.isRequired
}

export default RandomList;
