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
import NotFound from './not-found';
import Authorize from './authorize';
import Finances from './finances';

import MenuObjects from 'src/components/menu-objects';
import MenuFinance from 'src/components/menu-finance';
import MenuSettings from 'src/components/menu-settings';
import UserControl from 'src/components/user-control';

import {changeLanguage} from 'src/actions/language';
import {fetchUserInfo} from 'src/actions/user';

import {selectAllObjects} from 'src/selectors/object';
import {selectCurrentUser} from 'src/selectors/user';

import 'index.scss';
import 'src/styles/helpers.scss';

@withRouter
@connect(state => ({
  language: state.language,
  auth: state.auth,
  execution: state.execution,
  objects: selectAllObjects(state),
  currentObjectId: state.common.currentObjectId,
  user: selectCurrentUser(state) || {},
}), {
  changeLanguage,
  fetchUserInfo,
})
export default class extends RouteComponent {
  componentWillMount() {
    this.props.fetchUserInfo();
  }

  setLanguage(currentLanguage = this.props.language.current) {
    this.props.changeLanguage(currentLanguage);
  }

  render() {
    if ((this.props.execution[fetchUserInfo.toString()] || {}).running) {
      return <div>WAIT</div>;
    }
    if (!this.props.auth.isAuthorized) {
      return <Authorize/>;
    }
    return (
      <div className="grid-static vp-height vp-width">
        <div className="full-height col-3 no-margin">
          <Link to="/" className="app__logo block">
            <div className="full-height" align="center">
              <img src="/images/logo.svg" className="full-height"/>
            </div>
          </Link>

          <div className="app__menu app-content-height full-width">
            <div className="app__menu-text text-default text-white">MENU</div>
            <MenuObjects objects={this.props.objects || []}
              currentObjectId={this.props.currentObjectId}
              isActive={true}
            />
            <MenuFinance/>
            <MenuSettings/>
          </div>
        </div>

        <div className="full-height col-full no-margin">
          <div className="app__header app-header-height">
            <div className="pull-right">
              <UserControl className="app__user-control" user={this.props.user}
                onLogout={() => alert('Log out has not supported yet')}/>
            </div>
          </div>

          <div className="app__content app-content-height overflow-y-auto full-height">
            <Switch>
              <Route exact path='/' component={IndexRoute}/>
              <Route path='/object/:id' component={ObjectRoute}/>
              <Route path='/test' component={Finances}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
