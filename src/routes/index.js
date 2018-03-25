/**
 * Created by ed on 17/03/2018.
 */

'use strict';

import React from 'react';

import RouteComponent from 'src/routes/route-component';
import { Link, Route, Switch } from 'react-router-dom';

import Test from './test';
import NotFound from './not-found';
import Card from 'src/components/object-card';
import Container from 'src/components/objects-container';

import 'index.scss';
import 'src/styles/helpers.scss';

export default class extends RouteComponent {
  render () {
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
            <Link to="/test" style={{'color': 'white'}}>Go to test</Link>
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
                  <Card {...cardData}/>
                  <Card {...cardData}/>
                  <Card {...cardData}/>
                  <Card {...cardData}/>
                  <Card {...cardData}/>
                  <Card {...cardData}/>
                  <Card {...cardData}/>
                  <Card {...cardData}/>
                  <Card {...cardData}/>
                  <Card {...cardData}/>
                  <Card {...cardData}/>
                  <Card {...cardData}/>
                  <Card {...cardData}/>
                  <Card {...cardData}/>
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
