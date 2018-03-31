/**
 * Created by ed on 17/03/2018.
 */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import rootSaga from './sagas';

import reducer from './reducers';
import Routes from './routes';

import * as objectActionTypes from 'src/actionTypes/object';

// must be imported into the project at least once
import 'normalize.css';
import 'src/styles/global.scss';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(rootSaga);

const initStore = function(store) {
  store.dispatch({type: objectActionTypes.FETCH});
};

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Routes/>
        </Router>
      </Provider>
    );
  }
}

const render = function() {
  ReactDOM.render(
    <App/>,
    document.getElementById('app'),
  );
};

initStore(store);
render();
store.subscribe(render);