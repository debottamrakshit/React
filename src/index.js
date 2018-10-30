/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import '../../shared/styles/styles.css'; //Webpack can import CSS files too!
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import routes from './routes';
import {Router, browserHistory} from 'react-router';



ReactDom.render(<App/>, document.getElementById('app'));
<Router history={browserHistory} routes={routes}/>
registerServiceWorker();