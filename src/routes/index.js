/**
 * Created by ed on 17/03/2018.
 */

'use strict';

import React from 'react';

import RouteComponent from 'src/routes/route-component';
import { Link, Route, Switch } from 'react-router-dom';

import Test from './test';
import NotFound from './not-found';

import 'src/styles/helpers.scss';

export default class extends RouteComponent {
  render () {
    return (
      <div>
        <div>
          <Link to="/" className="pull-right">Home</Link>
        </div>

        <Switch>
          <Route exact path='/'>
            <div>
              <h1>Home page</h1>
              <Link to="/test">Go to test</Link>
              <br/>
              <Link to="/404">Go to 404</Link>
            </div>
          </Route>
          <Route path='/test' component={Test}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    );
  }
}
