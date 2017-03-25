import axios from 'axios';
import config from '../../config/api';

export const SET_GROUP = 'SET_GROUP';
export const SET_LOAD_COLLECTION = 'SET_LOAD_COLLECTION';

export function setGroup(collections) {
  return {
    type: SET_GROUP,
    collections
  }
}


export function setLoadCollection(collections) {
  return {
    type: SET_LOAD_COLLECTION,
    collections
  }
}


export function getGroup() {
  let url = `https://api.unsplash.com/collections/featured?page=1&per_page=30&client_id=${config.app_id}`;
  return dispatch => {
    return axios.get(url)
      .then(res => dispatch(setGroup(res.data)))
  }
}

export function getLoadCollection(page) {
  let url = `https://api.unsplash.com/collections/featured?page=${page}&per_page=30&client_id=${config.app_id}`;
  return dispatch => {
    return axios.get(url)
      .then(res => dispatch(setLoadCollection(res.data)))
  }
}
