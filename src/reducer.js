import { LIST, PROFILE } from './actions';

const initialState = {
    data: [],
    selection: ''
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LIST:
            return Object.assign({}, state, {
                data: action.value
            })
        case PROFILE:
            return Object.assign({}, state, {
                selection: action.value
            })
        default:
            return state;
    }
}

export default reducer;