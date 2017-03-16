import { combineReducers } from 'redux';
import random_photos from './random-photos';
import single_photo from './single-photo';
import collections from './collects';

export default combineReducers({
  random_photos,
  single_photo,
  collections
});
