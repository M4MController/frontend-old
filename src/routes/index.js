/**
 * Created by ed on 17/03/2018.
 */

'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import RouteComponent from 'src/routes/route-component';
import {Link, Route, Switch} from 'react-router-dom';

import Test from './test';
import NotFound from './not-found';
import Object from 'src/components/object';
import Container from 'src/components/container';

import 'index.scss';
import 'src/styles/helpers.scss';

import * as LanguageActions from 'src/actions/language';
import * as ObjectActions from 'src/actions/object';

@withRouter
@connect(state => ({
  language: state.language,
  object: state.object,
  execution: state.execution,
}))
class IndexRoute extends RouteComponent {
  constructor(...args) {
    super(...args);
  }

  setLanguage(currentLanguage = this.props.language.current) {
    this.props.dispatch(LanguageActions.changeLanguage(currentLanguage));
  }

  render() {
    const cardData = {
      controllersErrorsCount: 0,
      controllersCount: 6,
      name: 'HOUSE NEAR THE ROAD',
      counters: [
        {
          name: 'Electricity',
          amount: 1234,
        },
        {
          name: 'Hot water',
          amount: 6,
        },
        {
          name: 'Cold water',
          amount: 42,
        },
        {
          name: 'Electricity',
          amount: 1234,
        },
        {
          name: 'Hot water',
          amount: 6,
        },
        {
          name: 'Cold water',
          amount: 42,
        },
      ],
      curMonthAmount: 6789,
      lastMonthAmount: 5678,
      yearAverageAmount: 6000,
    };

    return (
      <div className="app table">
        <div className="full-height app-menu-width pull-left">
          <Link to="/" className="app__logo block" align="middle">
            <img src="/images/logo.svg" className="max-height"/>
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
              <div style={{color: 'white'}}>{JSON.stringify(this.props.execution[ObjectActions.updateAll])}</div>
              <div style={{color: 'white'}}>{JSON.stringify(this.props.object)}</div>
            </div>
          </div>

          <div className="app__content app-content-height">
            <Switch>
              <Route exact path='/'>
                <Container>
                  <Object {...cardData}/>
                  <Object {...cardData}/>
                  <Object {...cardData}/>
                  <Object {...cardData}/>
                  <Object {...cardData}/>
                  <Object {...cardData}/>
                  <Object {...cardData}/>
                  <Object {...cardData}/>
                  <Object {...cardData}/>
                  <Object {...cardData}/>
                  <Object {...cardData}/>
                  <Object {...cardData}/>
                  <Object {...cardData}/>
                  <Object {...cardData}/>
                </Container>
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

export default IndexRoute;
