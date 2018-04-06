/**
 * Created by ed on 17/03/2018.
 */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import rootSaga from './sagas';

import reducer from './reducers';
import Routes from './routes';

import * as objectActions from 'src/actions/object';

// must be imported into the project at least once
import 'normalize.css';
import 'src/styles/global.scss';
import * as sensorsActions from './actions/sensors';

function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();
  const sagas = [rootSaga];
  const middlewares = [sagaMiddleware];
  const enhancers = [
    applyMiddleware(...middlewares),
    // other store enhancers if any
  ];
  const composeEnhancers = composeWithDevTools(
    {
      // other compose enhancers if any
      // Specify here other options if needed
    }
  );
  const store = createStore(reducer, initialState, composeEnhancers(...enhancers));
  sagaMiddleware.run(...sagas);
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      /* eslint-disable global-require */
      const nextReducer = require('./reducers').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

const store = configureStore();

const initStore = function(store) {
  store.dispatch(objectActions.updateAll());
  store.dispatch(sensorsActions.getSensors(1));
  
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