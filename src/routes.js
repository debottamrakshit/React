import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Main from './components/kart/Main';
import AboutPage from './components/about/AboutPage';
import ManageProductListPage from './components/product/ManageProductListPage';
import CheckoutSummary from './components/kart/summary/CheckoutSummary';

export default (
    <Route path="/" exact={true} component={App}>
        <IndexRoute component={ManageProductListPage} />
        <Route path="/about" component={AboutPage}/>
        <Route path="/checkout" component={Main}/>
        <Route path="/checkoutSummary" component={CheckoutSummary}/>
    </Route>
);
