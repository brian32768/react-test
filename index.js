import React from 'react';  // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux' // eslint-disable-line no-unused-vars
import App from './src/App.js';  // eslint-disable-line no-unused-vars
import configureStore from './src/configstore'

const {store} = configureStore();

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById("app")
);
