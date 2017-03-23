import { SET_SEARCH, SET_LOAD_SEARCH } from '../actions/search';

export default (state = [], action = {}) => {
  switch (action.type) {
    case SET_SEARCH:
      return [
        action.photos
      ]
    case SET_LOAD_SEARCH:
      return [
        ...state,
        action.photos
      ]
    default:
      return state;
  }
}
