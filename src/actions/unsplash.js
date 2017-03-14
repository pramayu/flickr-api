import axios from 'axios';

import config from '../../config/api';

export const SET_RANDOM_PHOTOS = 'SET_RANDOM_PHOTOS';
export const SET_LOAD_PHOTOS = 'SET_LOAD_PHOTOS';

export function setRandomPhotos(photos) {
  return {
    type: SET_RANDOM_PHOTOS,
    photos
  }
}

export function setLoadPhotos(photos) {
  return {
    type: SET_LOAD_PHOTOS,
    photos
  }
}

export function getRandomPhotos() {
  const url = `https://api.unsplash.com/photos?page=1&per_page=30&order_by=latest&client_id=${config.app_id}`;
  return dispatch => {
    return axios.get(url)
      .then(photos => dispatch(setRandomPhotos(photos.data)));
  }
}

export function getLoadPhotos(num) {
  const url = `https://api.unsplash.com/photos?page=${num}&per_page=30&order_by=latest&client_id=${config.app_id}`;
  return dispatch => {
    return axios.get(url)
      .then(photos => dispatch(setLoadPhotos(photos.data)));
  }
}
