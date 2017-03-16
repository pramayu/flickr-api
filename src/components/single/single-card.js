import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';

import SingleCollect from './single-collect';
import { allCollects } from '../../actions/collects';

class SingleCard extends Component {

  componentDidMount() {
    this.props.allCollects();
  }

  render() {

    let collection = (
      <div className="more_">
        { this.props.collections.map((collection, ids) =>
          collection.map((collect, id) => <SingleCollect collection={collect} key={id} id={id} />)
        )}
      </div>
    )

    return (
      <div className="buluk">
        <img className="ytl" src={this.props.photo.urls.regular} alt=""/>
        <div className="lkj">
          <div className="user">
            <img src={this.props.photo.user.profile_image.medium} alt=""/>
            <span className="name">{this.props.photo.user.name}</span>
          </div>
          <div className="download">
            <button className="cvf btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <span className="fa fa-ellipsis-h"></span>
            </button>
            <ul className="dropdown-menu fvck" aria-labelledby="dropdownMenu2" id="drp_2">
              <li className="sf"><a><span className="fa fa-desktop"></span> Resolution <span className="soh">
                {this.props.photo.width}x{this.props.photo.height}
              </span></a></li>
              <li className="sf"><a><span className="fa fa-heart"></span> Downloads <span className="soh">
                {this.props.photo.downloads}
              </span></a></li>
              <li className="sf"><a><span className="fa fa-cloud-download"></span> Likes <span className="soh">
                {this.props.photo.likes}
              </span></a></li>
              <li className="df"><span className="fa fa-camera"></span><p className="kjg"><a href="">unsplash</a></p></li>
            </ul>
            <a  href={this.props.photo.links.download} download className="dwn btn">DOWNLOAD</a>
            <button className="cloi btn"></button>
          </div>
        </div>
        <div className="similar">
          <h3 className="dx">More Collections</h3>
          { collection }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    collections: state.collections
  }
}

SingleCard.propTypes = {
  collections: React.PropTypes.array.isRequired
}

export default connect(mapStateToProps, { allCollects })(SingleCard);
