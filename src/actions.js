import axios from 'axios';

export const LIST = 'LIST';
export const PROFILE = 'PROFILE';

export function updateList(value) {
    return { 
        type: LIST, 
        value: value
    }
};

export function updateProfile(value) {
    return {
        type: PROFILE,
        value: value
    }
};

export function fetchList(passedProps) {
    console.log(passedProps)
    return axios.get('https://fb-assessment.glitch.me/artists')
        .then(res => passedProps.dispatch(updateList(res.data)))
        .catch(err => console.log(err))
    
}

export function handleChange(value, passedProps) {
    console.log(passedProps);
    let route = 'https://fb-assessment.glitch.me/artists/' + value;
    return axios.get(route)
        .then(res => passedProps.dispatch(updateProfile(res.data)))
        .catch(err => console.log(err))
}
