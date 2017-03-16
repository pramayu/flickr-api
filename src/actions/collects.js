import axios from 'axios';
import config from '../../config/api';
export const SET_SINGLE_COLLECTS = 'SET_SINGLE_COLLECTS';


export function setSingleCollects(collects) {
  return {
    type: SET_SINGLE_COLLECTS,
    collects
  }
}

export function allCollects() {
  let arr = new Array(500);
  let arrpush = [];
  for(let i = 0; i < arr.length; i++) {
    let arrthis = i+1;
    arrpush.push(arrthis);
  }
  let page = Math.floor(Math.random() * arrpush.length);
  const url = `https://api.unsplash.com/collections?page=${page}&per_page=9&client_id=${config.app_id}`;
  return dispatch => {
    return axios.get(url)
      .then(res => dispatch(setSingleCollects(res.data)));
  }
}
