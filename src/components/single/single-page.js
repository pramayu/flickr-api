import React, { Component } from 'react';
import { connect } from 'react-redux';
import { singlePhoto } from '../../actions/single-action';

class SinglePage extends Component {
  componentDidMount(){
    this.props.singlePhoto(this.props.params.id)
  }
  render () {
    return (
      <div className="container-fluid custom-container">
        {this.props.params.id}
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
