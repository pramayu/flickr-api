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
  let dum = {
    id: "cB1MYAiClHY",
    created_at: "2015-12-27T03:39:00-05:00",
    updated_at: "2017-03-22T13:24:12-04:00",
    width: 2048,
    height: 1356,
    color: "#E2CF9A",
    likes: 381,
    liked_by_user: false,
    urls: {
      small: "https://images.unsplash.com/photo-1489098957513-b1ae22d9b212?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=327cb7bcdeda61171d70ed77d20cd65f"
    }
  }
  return dispatch => {
    return axios.get(url)
      .then(res =>
        res.data.map((data) => {
          if(data.cover_photo === null) {
            data.cover_photo = Object.assign({}, dum);
          } else {
            dispatch(setSingleCollects(res.data))
          }
        })
      );
  }
}
