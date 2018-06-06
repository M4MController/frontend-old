/**
 * Created by ed on 17/03/2018.
 */

'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import RouteComponent from 'src/routes/route-component';

import {changeCurrentObject} from 'src/actions/common';
import {fetchForObjectPage} from 'src/actions/common';
import {selectCardSensors} from 'src/selectors/sensor';

import Container from 'src/components/container';
import SensorCard from 'src/components/card-sensor';

@withRouter
@connect(state => ({
  sensors: selectCardSensors(state),
  execution: state.execution,
}))
export default class extends RouteComponent {
  componentWillMount() {
    const objectId = this.props.match.params.id;
    this.props.dispatch(changeCurrentObject(objectId));
    this.props.dispatch(fetchForObjectPage(objectId));
  }

  componentWillUnmount() {
    this.props.dispatch(changeCurrentObject(-1));
  }

  render() {
    const loadingState = this.props.execution[fetchForObjectPage] || {};
    const isEmpty = !this.props.sensors.length;

    if (loadingState.running) {
      return <div>LOADING...</div>;
    } else if (loadingState.error) {
      return <div>ERROR</div>;
    } else if (isEmpty) {
      return <div>NO OBJECTS</div>;
    } else {
      return (
        <Container>
          {
            this.props.sensors.map(
              sensor => <SensorCard key={sensor.id} sensor={sensor}/>)
          }
        </Container>
      );
    }
  }
}
