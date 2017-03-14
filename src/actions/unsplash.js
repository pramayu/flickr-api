import axios from 'axios';

import config from '../../config/api';

export const SET_RANDOM_PHOTOS = 'SET_RANDOM_PHOTOS';

export function setRandomPhotos(photos) {
  return {
    type: SET_RANDOM_PHOTOS,
    photos
  }
}

export function getRandomPhotos() {
  const url = `https://api.unsplash.com/photos?page=1&per_page=30&order_by=popular&client_id=${config.app_id}`;
  return dispatch => {
    return axios.get(url)
      .then(photos => dispatch(setRandomPhotos(photos.data)));
  }
}
