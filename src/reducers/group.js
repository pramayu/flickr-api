import { SET_GROUP, SET_LOAD_COLLECTION } from '../actions/group';

export default (state = [], action = {}) => {
  switch (action.type) {
    case SET_GROUP:
      return [
        action.collections
      ]
    case SET_LOAD_COLLECTION:
      return [
        ...state,
        action.collections
      ]
    default:
      return state;
  }
}
