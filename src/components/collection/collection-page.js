import React, { Component } from 'react';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';

import CollectionUser from './collection-user';
import CollectionList from './collection-list';
import { getInsideCollection, getMomCollection } from '../../actions/inside-collection';

const masonryOptions = {
    transitionDuration: 0
};

class CollectionPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      total_photos: 0
    }
  }

  componentDidMount() {
    this.props.getInsideCollection(this.props.params.id)
    this.props.getMomCollection(this.props.params.id)
  }

  componentWillReceiveProps() {
    this.props.user.map((user) => {
      this.setState({ total_photos: user.total_photos })
    })
  }

  render() {

    let user = (
      this.props.user.map((user) =>
        <CollectionUser user={user} key={user.id} />
      )
    )

    let collection = (
      this.props.collections.map((collections, id) =>
        collections.map((collection) =>
          <CollectionList collection={collection} key={collection.id} />
        )
      )
    )

    return (
      <div className="container-fluid kbo">
        { user }
        <Masonry className={'gridk bar'} elementType={'ul'} options={masonryOptions} disableImagesLoaded={false} updateOnEachImageLoad={false} >
          { collection }
        </Masonry>
        <div className="btn-more">
          <button className="btn btn-mre">LOAD MORE</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    collections: state.inside_collections,
    user: state.browse_collections
  }
}

export default connect(mapStateToProps, { getInsideCollection, getMomCollection })(CollectionPage);
