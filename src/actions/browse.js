import axios from 'axios';
import config from '../../config/api';

export const SET_BROWSE_PHOTOS = 'SET_BROWSE_PHOTOS';

export function setBrowsePhotos(photos) {
  return {
    type: SET_BROWSE_PHOTOS,
    photos
  }
}


export function getBrowsePhotos(term) {
  const url = `https://api.unsplash.com/photos?page=1&per_page=30&order_by=${term}&client_id=${config.app_id}`;
  return dispatch => {
    return axios.get(url)
      .then(res => dispatch(setBrowsePhotos(res.data)));
  }
}
