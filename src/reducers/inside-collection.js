import { SET_INSIDE_COLLECTION } from '../actions/inside-collection';

export default (state = [], action = {}) => {
  switch(action.type) {
    case SET_INSIDE_COLLECTION:
      return [
        action.collections
      ]
    default:
      return state;
  }
}
