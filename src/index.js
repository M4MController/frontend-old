/**
 * Created by ed on 17/03/2018.
 */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import promise from 'redux-promise';
import App from './routes';

// must be imported into the project at least once
import 'normalize.css';
import 'src/styles/global.scss';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('app'),
);
