import { SET_RANDOM_PHOTOS, SET_LOAD_PHOTOS, SET_SINGLE_PHOTO } from '../actions/unsplash';

export default (state = [], action = {}) => {
  switch(action.type) {
    case SET_RANDOM_PHOTOS:
      return [
        action.photos
      ]
    case SET_LOAD_PHOTOS:
      return [
        ...state,
        action.photos
      ]
    case SET_SINGLE_PHOTO:
      return [
        action.photo
      ]
    default:
      return state;
  }
}
