/**
 * Created by ed on 17/03/2018.
 */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import {createStore} from 'redux';

import reducer from './reducers';
import Routes from './routes';

// must be imported into the project at least once
import 'normalize.css';
import 'src/styles/global.scss';

const store = createStore(
  reducer,
);

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

render();
store.subscribe(render);