import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from "firebase/app";

import App from './App'
import 'semantic-ui-css/semantic.min.css'
import firebaseConfig from './config/firebase.config'

ReactDOM.render(
  <App />,
  document.querySelector("#root")
)

firebase.initializeApp(firebaseConfig);