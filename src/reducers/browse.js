import { SET_BROWSE_PHOTOS } from '../actions/browse';

export default (state = [], action = {}) => {
  switch (action.type) {
    case SET_BROWSE_PHOTOS:
      return [
        action.photos
      ]
    default:
      return state;
  }
}
