import React from 'react';
import { render } from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import { createStore } from 'redux';
import reducer from './reducers/reducer';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const store = createStore(reducer);

const rootElement = document.getElementById('root');

render(
    <Provider store={store}>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </Provider>,
    rootElement
)

serviceWorker.unregister();
