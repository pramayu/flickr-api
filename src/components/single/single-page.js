import React, { Component } from 'react';
import { connect } from 'react-redux';
import { singlePhoto } from '../../actions/single-action';
import SingleCard from './single-card';

class SinglePage extends Component {
  componentDidMount(){
    this.props.singlePhoto(this.props.params.id)
  }

  render () {
    const photo = (
      this.props.photo.map((photo) =>
        <SingleCard photo={photo} key={photo.id} />
      )
    );
    return (
      <div className="container custom-container bjrt_">
        {photo}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    photo: state.single_photo
  }
}

SinglePage.propTypes = {
  singlePhoto: React.PropTypes.func.isRequired,
  photo: React.PropTypes.array.isRequired
}

export default connect(mapStateToProps, { singlePhoto })(SinglePage);
