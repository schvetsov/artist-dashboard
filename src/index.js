import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const initialState = {
    data: [],
    selection: ''
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case "LIST":
            return Object.assign({}, state, {
                data: action.value
            })
        case "PROFILE":
            return Object.assign({}, state, {
                selection: action.value
            })
        default:
            return state;
    }
}

const store = createStore(reducer);

const App2 = () => (
    <Provider store={store}>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </Provider>
)

ReactDOM.render(<App2 />, document.getElementById('root'));

serviceWorker.unregister();
