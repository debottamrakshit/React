import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import AboutPage from './components/about/AboutPage';
import ManageProductListPage from './components/product/ManageProductListPage';



export default (
    <Route path="/" component={App}>
        <IndexRoute component={ManageProductListPage} />
        <Route path="about" component={AboutPage} />
    </Route>
);
