import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import WebsiteRouter from './router/WebsiteRouter';

import '@csstools/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<WebsiteRouter />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
