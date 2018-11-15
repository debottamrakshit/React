/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';

import configureStore from './store/configureStore';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../shared/styles/styles.css';
import routes from './routes';
import App from './components/App';
import {loadCheckout} from './actions/checkoutAction';
import {loadCountries} from './actions/countryAction';


const store = configureStore();
store.dispatch(loadCheckout());
store.dispatch(loadCountries());

store.subscribe( () => {
    console.log('state\n', store.getState());    
  });

render(        
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider> , document.getElementById('app')
);
    
