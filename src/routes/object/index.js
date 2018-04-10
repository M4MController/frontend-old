/**
 * Created by ed on 17/03/2018.
 */

'use strict';

import React from 'react';
import {withRouter} from 'react-router-dom';

import RouteComponent from 'src/routes/route-component';
import {Link, Route, Switch} from 'react-router-dom';

import Object from 'src/components/object';
import Controller from 'src/components/controller';
import Container from 'src/components/container';

import 'index.scss';
import 'src/styles/helpers.scss';

import api from 'src/api';

@withRouter
class IndexRoute extends RouteComponent {
  constructor(...args) {
    super(...args);
    this.state = {sensors: []};
  }

  async componentDidMount() {
    let sensors = [];

    const controllers = await api.userObjects().execute(this.props.match.params.id);
    for (let controller of controllers) {
      let s = await api.userControllerSensors().execute(controller.id);
      for (let sensor of s) {
        sensor.data = await api.userSensorData().execute(sensor.id, new Date().toISOString(), 1000);
      }
      sensors = sensors.concat(s);
    }

    this.setState(() => {
      return ({
        sensors,
      });
    });
  }

  render() {
    return (<Container>
      {
        this.state.sensors.map(sensor => {
          return <Controller key={sensor.id} sensor={sensor}/>;
        })
      }
    </Container>);

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
                      return <Object key={object.id} object={object}/>;
                    })
                  }
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