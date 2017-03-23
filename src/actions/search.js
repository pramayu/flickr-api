import axios from 'axios';
import config from '../../config/api';

export const SET_SEARCH = 'SET_SEARCH';
export const SET_LOAD_SEARCH = 'SET_LOAD_SEARCH';

export function setSearch(photos) {
  return {
    type: SET_SEARCH,
    photos
  }
}

export function setLoadSearch(photos) {
  return {
    type: SET_LOAD_SEARCH,
    photos
  }
}


export function getSearch(term) {
  const url = `https://api.unsplash.com/search/photos?page=1&per_page=30&query=${term}&client_id=${config.app_id}`;
  return dispatch => {
    return axios.get(url)
      .then(res => dispatch(setSearch(res.data)))
  }
}

export function getLoadSearch(term, page) {
  const url = `https://api.unsplash.com/search/photos?page=${page}&per_page=30&query=${term}&client_id=${config.app_id}`;
  return dispatch => {
    return axios.get(url)
      .then(res => dispatch(setLoadSearch(res.data)))
  }
}
