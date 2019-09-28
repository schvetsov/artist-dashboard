import axios from 'axios';
import { updateList, updateProfile } from '../actions';

export function importList(dispatch) {
    axios.get('https://jsonplaceholder.typicode.com/users/')
      .then(res => dispatch(updateList(res.data)))
      .catch(err => console.log(err))
  }

export function handleChange(value, dispatch) {
    let route = 'https://jsonplaceholder.typicode.com/users/' + value;
    return axios.get(route)
        .then(res => dispatch(updateProfile(res.data)))
        .catch(err => console.log(err))
}