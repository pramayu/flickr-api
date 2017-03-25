import React, { Component } from 'react';
import { connect } from 'react-redux';
import Jumbroton from './jumbroton';
import { getGroup, getLoadCollection } from '../../actions/group';
import GroupList from './group-list';

class GroupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 2
    }
  }
  componentDidMount() {
    this.props.getGroup()
  }

  onLoad() {
    this.setState({ page: this.state.page + 1})
    this.props.getLoadCollection(this.state.page)
  }

  render() {
    let collections = (
      this.props.collections.map((collections) =>
        collections.map((collection, id) =>
          <GroupList collection = {collection} key = {id} />
        )
      )
    )
    return (
      <div className="_poo">
        <Jumbroton />
        <div className="foi">
          { collections }
          <div className="clear"></div>
        </div>
        <div className="btn-more">
          <button className="btn btn-mre" onClick={this.onLoad.bind(this)}>LOAD MORE</button>
        </div>
      </div>
    )
  }
}

GroupPage.propTypes = {
  collections: React.PropTypes.array.isRequired,
  getGroup: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    collections: state.group
  }
}

export default connect(mapStateToProps, { getGroup, getLoadCollection })(GroupPage);
