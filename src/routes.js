import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import Main from './components/kart/Main';
import AboutPage from './components/about/AboutPage';
import CheckoutSummary from './components/kart/summary/CheckoutSummary';


export default (
    <Route path="/" component={App}>
        <Route path="/about" component={AboutPage}/>
        <Route path="/checkout" component={Main}/>
        <Route path="/checkoutSummary" component={CheckoutSummary}/>
    </Route>
);
