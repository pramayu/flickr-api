import React, { Component } from 'react';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';
import classnames from 'classnames';
import { getSearch, getLoadSearch } from '../../actions/search';
import SearchList from './search-list';
import Jumbroton from '../browse/jumbroton';

class SearchPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 2,
      total_pages: 0
    }
  }

  componentDidMount() {
    this.props.getSearch(this.props.params.term);
  }

  onLoad() {
    this.setState({
      page: this.state.page + 1
    })
    this.props.getLoadSearch(this.props.params.term, this.state.page)
  }

  componentWillReceiveProps() {
    this.props.photos.map((photo) => {
      this.setState({ total_pages: photo.total_pages })
    })
  }

  render() {
    const photos = (
      this.props.photos.map((photo) =>
        photo.results.map((result, id) =>
          <SearchList photo={result} id={id} />
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
        <div className={classnames('pagenation', {btn_hide: this.state.total_pages === this.state.page })}>
          <button onClick={() => this.onLoad() } className="btn btn-add-page">LOAD MORE</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    photos: state.search
  }
}

export default connect(mapStateToProps, { getSearch, getLoadSearch })(SearchPage);
