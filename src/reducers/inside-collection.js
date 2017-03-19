import { SET_INSIDE_COLLECTION, SET_LOAD_PHOTO } from '../actions/inside-collection';

export default (state = [], action = {}) => {
  switch(action.type) {
    case SET_INSIDE_COLLECTION:
      return [
        action.collections
      ]
    case SET_LOAD_PHOTO:
      return [
        ...state,
        action.collections
      ]
    default:
      return state;
  }
}
