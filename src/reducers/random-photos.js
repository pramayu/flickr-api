import { SET_RANDOM_PHOTOS } from '../actions/unsplash';

export default (state = [], action = {}) => {
  switch(action.type) {
    case SET_RANDOM_PHOTOS:
      return [
        action.photos
      ]
    default:
      return state;
  }
}
