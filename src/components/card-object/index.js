/**
 * Created by Dmitry Zaytsev on 25/03/2018.
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import Header from 'src/components/card-header';
import Bubble from 'src/components/bubble';

import 'index.scss';
import {Link} from 'react-router-dom';

const getAllSensors = function(object) {
  return object.controllers.map(controller => controller.sensors).
    reduce((sensors1, sensors2) => sensors1.concat(sensors2), []).
    map(sensor => ({
      id: sensor.id,
      name: sensor.name,
      value: (sensor.data.sort((a, b) => a.date > b.date).
        concat([{value: 0}]))[0].value,
    }),
    );
};

export default class extends React.Component {
  render() {
    const sensors = getAllSensors(this.props.object).slice(0, 6);
    const stats = this.props.object.stats || {}; // todo: use object stats
    // record
    return (
      <div className='object item card col-4' style={{'display': 'flex'}}>
        <Header
          title={this.props.object.name}
          counter={this.props.object.controllers.length || '0'}
          description="active controllers"
          link={`/object/${this.props.object.id}`}
        />
        <div className="object__body padding-bottom-1x">
          <div className="grid-fluid full-height items-center">
            {
              sensors.length ? (
                sensors.map(sensor =>
                  <div key={sensor.id}
                    className="col col-min-6 object__amount margin-top-1x">
                    <span className="text-default pull-left">
                      {sensor.name}
                    </span>
                    <Bubble
                      mode="ok"
                      className="pull-right">
                      {sensor.value}
                    </Bubble>
                  </div>,
                )
              ) : (
                <div className="text-muted text-center col-12 margin-top-1x">
                  No sensors
                </div>
              )
            }
          </div>
        </div>
        <div className="object__footer grid-fluid">
          <div className="col-6 full-height">
            {
              [
                {
                  name: $t('card_object_current_month'),
                  value: stats.curMonthAmount || 100,
                },
                {
                  name: $t('card_object_last_month'),
                  value: stats.lastMonthAmount || 100,
                },
                {
                  name: $t('card_object_average_year'),
                  value: stats.yearAverageAmount || 100,
                },
              ].map((sensor, i) =>
                <div key={i} className="col-12 object__amount margin-top-1x">
                  <span className="text-default pull-left">
                    {sensor.name}
                  </span>
                  <Bubble
                    mode="ok"
                    className="pull-right">
                    {sensor.value}
                  </Bubble>
                </div>,
              )
            }
          </div>
          <div className="col-6 col-center">
            <Link to="/" className="btn btn_ok pull-right">{$t(
              'card_object_pay')}</Link>
          </div>
        </div>
      </div>
    );
  }

  get displayName() {
    return 'card-object';
  }

  static get propTypes() {
    return {
      object: PropTypes.object,
    };
  }
}
