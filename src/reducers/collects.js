import { SET_SINGLE_COLLECTS } from '../actions/collects';

export default (state = [], action = {}) => {
  switch(action.type) {
    case SET_SINGLE_COLLECTS:
      return [
        action.collects
      ]
    default:
      return state;
  }
}
