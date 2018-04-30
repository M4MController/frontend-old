/**
 * Created by ed on 17/03/2018.
 */

'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Link, Route, Switch} from 'react-router-dom';

import RouteComponent from 'src/routes/route-component';

import IndexRoute from './index-route';
import ObjectRoute from './object';
import Test from './test';
import NotFound from './not-found';

import {changeLanguage} from 'src/actions/language';

import 'index.scss';
import 'src/styles/helpers.scss';

import * as LanguageActions from 'src/actions/language';
import * as ObjectActions from 'src/actions/object';
import * as DataActions from 'src/actions/data';

import ControllerWindow from '../components/ControllerWindow/index.js';
import ModularWindow from '../components/ModularWindow/index.js';

@withRouter
@connect(state => ({
  language: state.language,
}), {
  changeLanguage,
})
export default class extends RouteComponent {
  setLanguage(currentLanguage = this.props.language.current) {
    this.props.changeLanguage(currentLanguage);
  }

  render() {
    return (
      <div className="app table">
        <div className="full-height app-menu-width pull-left">
          <Link to="/" className="app__logo block">
            <div className="max-height" align="center">
              <img src="/images/logo.svg" className="max-height"/>
            </div>
          </Link>

          <div className="app__menu app-content-height">
            <div className="app__menu-text">MENU</div>

            <br/>
            <button onClick={() => this.setLanguage('ru')}>ru</button>
            <button onClick={() => this.setLanguage('en')}>en</button>
            <Link to="/test" style={{'color': 'white'}}>{$t('test_message')}</Link>
            <br/>
            <Link to="/404" style={{'color': 'white'}}>Go to 404</Link>
          </div>
        </div>

        <div className="full-height pull-left">
          <div className="app__header app-header-height">
            <div className="pull-right">

            </div>
          </div>

          <div className="app__content app-content-height">
            <Switch>
              <Route exact path='/' component={IndexRoute}/>
              <Route path='/object/:id' component={ObjectRoute}/>
              <Route path='/test' component={Test}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </div>

      <ControllerWindow receiveData={(data) => {}}/>
      </div>
    );
  }
}
