import { SET_BROWSE_PHOTOS, SET_LOAD_BROWSE } from '../actions/browse';

export default (state = [], action = {}) => {
  switch (action.type) {
    case SET_BROWSE_PHOTOS:
      return [
        action.photos
      ]
    case SET_LOAD_BROWSE:
      return [
        ...state,
        action.photos
      ]
    default:
      return state;
  }
}
