import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase/app';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';

import App from './App';
import 'semantic-ui-css/semantic.min.css';
import firebaseConfig from './config/firebase.config';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);

firebase.initializeApp(firebaseConfig);