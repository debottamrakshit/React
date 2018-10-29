/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import './styles/styles.css'; //Webpack can import CSS files too!
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';


ReactDom.render(<App/>, document.getElementById('app'));
registerServiceWorker();