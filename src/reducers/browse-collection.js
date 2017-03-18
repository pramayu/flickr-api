import { SET_USER_COLLECT } from '../actions/inside-collection';

export default (state = [], action = {}) => {
  switch(action.type) {
    case SET_USER_COLLECT:
      return [
        action.momcollect
      ]
    default:
      return state;
  }
}
