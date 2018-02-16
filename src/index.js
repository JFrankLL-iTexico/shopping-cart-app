import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import App from './app/App';

import store from './store';

const appBody = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(appBody, document.getElementById('root'));
