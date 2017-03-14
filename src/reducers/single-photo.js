import { SET_SINGLE_PHOTO } from '../actions/single-action';

export default (state = [], action = {}) => {
  switch(action.type) {
    case SET_SINGLE_PHOTO:
      return [
        action.photo
      ]
    default:
      return state;
  }
}
