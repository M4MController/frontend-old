/**
 * Created by ed on 17/03/2018.
 */

'use strict';

import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import RouteComponent from 'src/routes/route-component';
import {Link, Route, Switch} from 'react-router-dom';

import Test from './test';
import NotFound from './not-found';
import Object from 'src/components/object';
import Controller from 'src/components/controller';
import Container from 'src/components/container';

import 'index.scss';
import 'src/styles/helpers.scss';

import * as LanguageActions from 'src/actions/language';

@withRouter
@connect(state => ({
  language: state.language,
}))
class IndexRoute extends RouteComponent {
  constructor(...args) {
    super(...args);
    this.languageActions = bindActionCreators(LanguageActions, this.props.dispatch);
  }

  setLanguage(currentLanguage = this.props.language.current) {
    this.languageActions.changeLanguage(currentLanguage);
    // todo: move language update into saga
    // i18n(currentLanguage);
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

    const controllerData = {
      controllerError: false,
      controllerName: 'ELECTRICITY',
      companyName: 'AnyCompany-Name',
      curMonthAmount: 3789,
      curMonthForecast: 7232,
      lastMonthAmount: 5678,
      yearAverageAmount: 6000,
      accural: 100,
      overpay: 70,
      summary: 30,
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
              <Route exact path='/controllers'>
                <Container>
                  <Controller {...controllerData}/>
                  <Controller {...controllerData}/>
                  <Controller {...controllerData}/>
                  <Controller {...controllerData}/>
                  <Controller {...controllerData}/>
                  <Controller {...controllerData}/>
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