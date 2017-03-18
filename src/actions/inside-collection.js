import axios from 'axios';
import config from '../../config/api';

export const SET_INSIDE_COLLECTION = 'SET_INSIDE_COLLECTION';
export const SET_USER_COLLECT = 'SET_USER_COLLECT';

export function setInsideCollection(collections) {
  return {
    type: SET_INSIDE_COLLECTION,
    collections
  }
}

export function setMomCollection(momcollect) {
  return {
    type: SET_USER_COLLECT,
    momcollect
  }
}

export function getInsideCollection(id) {
  const url = `https://api.unsplash.com/collections/${id}/photos?page=1&per_page=30&client_id=${config.app_id}`;
  return dispatch => {
    return axios.get(url)
      .then(response => dispatch(setInsideCollection(response.data)));
  }
}

export function getMomCollection(id) {
  const url = `https://api.unsplash.com/collections/${id}?client_id=${config.app_id}`;
  return dispatch => {
    return axios.get(url)
      .then(res => dispatch(setMomCollection(res.data)));
  }
}
