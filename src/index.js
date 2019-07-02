import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './redux';
import App from './App';

import registerServiceWorker from './registerServiceWorker';
import { initAxios } from './config';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
initAxios();
