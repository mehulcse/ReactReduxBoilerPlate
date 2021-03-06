import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import 'assets/css/style.scss';
import 'assets/css/font-awesome.min.scss';
import 'assets/css/Custom.scss';

import configureStore from './store';
import App from './routes';

ReactDOM.render(
    <Provider store={configureStore()}>
        <App />
    </Provider>,
    document.getElementById('root')
);
