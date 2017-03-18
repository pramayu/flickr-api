import { combineReducers } from 'redux';
import random_photos from './random-photos';
import single_photo from './single-photo';
import collections from './collects';
import inside_collections from './inside-collection';
import browse_collections from './browse-collection';

export default combineReducers({
  random_photos,
  single_photo,
  collections,
  inside_collections,
  browse_collections
});
