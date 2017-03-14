import axios from 'axios';
import config from '../../config/api';
export const SET_SINGLE_PHOTO = 'SET_SINGLE_PHOTO';


export function setSinglePhoto(photo) {
  return {
    type: SET_SINGLE_PHOTO,
    photo
  }
}

export function singlePhoto(id) {
  const url = `https://api.unsplash.com/photos/${id}?client_id=${config.app_id}`;
  return dispatch => {
    return axios.get(url)
      .then(photo => dispatch(setSinglePhoto(photo.data)));
  }
}
