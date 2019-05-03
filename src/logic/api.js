import axios from 'axios';
import { updateList, updateProfile } from '../actions';

export function fetchList(dispatch) {
    return axios.get('https://fb-assessment.glitch.me/artists')
        .then(res => dispatch(updateList(res.data)))
        .catch(err => console.log(err))
    
}

export function handleChange(value, dispatch) {
    let route = 'https://fb-assessment.glitch.me/artists/' + value;
    return axios.get(route)
        .then(res => dispatch(updateProfile(res.data)))
        .catch(err => console.log(err))
}
