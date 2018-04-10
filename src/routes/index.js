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
import ObjectRoute from './object';

import Object from 'src/components/object';
import Container from 'src/components/container';

import 'index.scss';
import 'src/styles/helpers.scss';

import * as LanguageActions from 'src/actions/language';


// todo: убрать это отсюда как можно скорее
import api from 'src/api';

@withRouter
@connect(state => ({
  language: state.language,
  controller: state.controller,
  sensor: state.sensor,
  object: state.object,
  data: state.data,
  execution: state.execution,
}))
class IndexRoute extends RouteComponent {
  constructor(...args) {
    super(...args);
    this.state = {objects:[]};
  }

  async componentDidMount() {
    // todo: убрать это отсюда как можно скорее
    try {
      // await api.authorization().execute('ml@gmail.com', '123456');
    } catch (e) {
      console.log('Can not authorize', e);
    }

    const objects = await api.userObjects().execute();
    for (let object of objects) {
      object.controllers = await api.userObjectControllers().execute(object.id);

      for (let controller of object.controllers) {
        controller.sensors = await api.userControllerSensors().execute(controller.id);

        for (let sensor of controller.sensors) {

          sensor.data = await api.userSensorData().execute(sensor.id, new Date(1970,1,1).toISOString(), 1000);
        }
      }
    }

    this.setState(() => {
      return ({
        objects,
      });
    });
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

    // alert( this.state.objects.length);
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
              <Route exact path='/'>
                <Container>
                  {
                    this.state.objects.map(object => {
                      return <Object key={object.id} object={object}/>
                    })
                  }
                </Container>
              </Route>
              <Route exact path='/object/:id' component={ObjectRoute}/>
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