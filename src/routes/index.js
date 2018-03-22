/**
 * Created by ed on 17/03/2018.
 */

'use strict';

import React from 'react';

import RouteComponent from 'src/routes/route-component';
import { Link, Route, Switch } from 'react-router-dom';

import Test from './test';
import NotFound from './not-found';

import 'index.scss';
import 'src/styles/helpers.scss';

export default class extends RouteComponent {
  render () {
    return (
      <div className="app table">
        <div className="full-height app-menu-width pull-left">
          <Link to="/" className="app__logo block" align="middle">
            <img src="/images/logo.svg" className="max-height"/>
          </Link>

          <div className="app__menu app-content-height">
            <div style={{'color': 'white', padding: '20px'}}>
              It can contains the site map:
              <br/>
              <Link to="/test" style={{'color': 'white'}}>Go to test</Link>
              <br/>
              <Link to="/404" style={{'color': 'white'}}>Go to 404</Link>
            </div>
          </div>
        </div>

        <div className="full-height pull-left">
          <div className="app__header app-header-height">
            <div className="pull-right">
              <span style={{color: 'white'}}>It can contains some content:</span>
              <img src="/images/logo.svg" className="app-header-height"/>
              <img src="/images/logo.svg" className="app-header-height"/>
              <img src="/images/logo.svg" className="app-header-height"/>
              <img src="/images/logo.svg" className="app-header-height"/>
            </div>
          </div>

          <div className="app__content app-content-height">
            <Switch>
              <Route exact path='/'>
                <h1>Home page</h1>
              </Route>
              <Route path='/test' component={Test}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
