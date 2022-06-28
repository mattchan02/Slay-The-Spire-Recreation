import React from 'react';
import ReactDOM from 'react-dom';
import IndexCSS from './CSSFiles/index.css';
import App from './App';
import store from './app/store.js'
import configureStore from './app/store.js'
import reducer from './app/store.js'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
