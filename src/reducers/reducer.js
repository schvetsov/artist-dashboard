import { LIST, PROFILE } from '../actions/actions';

const initialState = {
    data: [],
    selection: ''
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LIST:
            return {
                data: action.value,
                selection: ''
            }
        case PROFILE:
            return Object.assign({}, state, {
                selection: action.value
            })
        default:
            return state;
    }
}

export default reducer;
