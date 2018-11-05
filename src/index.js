/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';

import configureStore from './store/configureStore';

import 'bootstrap/dist/css/bootstrap.min.css';
import routes from './routes';
import App from './components/App';
import {loadCheckout} from './actions/checkoutAction';


const store = configureStore();
store.dispatch(loadCheckout());

render(        
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider> , document.getElementById('app')
);
    
