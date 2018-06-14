/**
 * Created by Dmitry Zaytsev on 01/04/2018.
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import 'index.scss';

import Header from 'src/components/card-header';
import Amount from './amount';
import Bubble from 'src/components/bubble';
import {Link} from 'react-router-dom';

export default class extends React.Component {
  render() {
    const stats = {
      curMonthForecast: 1000,
      curMonthAmount: 100,
      lastMonthAmount: 1200,
      yearAverageAmount: 920,
    }; // todo:

    const forecast = stats.curMonthForecast;
    const currentPeriod = {
      periodName: $t('card_controller_current_month'),
      periodAmount: stats.curMonthAmount,
      percent: 100 * stats.curMonthAmount / forecast,
    };
    const lastMonthPeriod = {
      periodName: $t('card_controller_last_month'),
      periodAmount: stats.lastMonthAmount,
      percent: forecast < stats.lastMonthAmount ?
        100 * stats.curMonthAmount / forecast :
        100,
    };
    const averagePeriod = {
      periodName: $t('card_controller_average_year'),
      periodAmount: stats.yearAverageAmount,
      percent: forecast < stats.yearAverageAmount ?
        100 * stats.curMonthAmount / forecast :
        100,
    };

    return (
      <div className="object item card col-4" style={{'display': 'flex'}}>
        <Header
          title={this.props.sensor.name}
          link='/'
        />
        <div className="object__body padding-bottom-1x">
          <div className="grid-fluid full-height items-center">
            <div className="col-12">
              <Amount {...currentPeriod}>
                <span className="controller__payment-forecast">
                  &nbsp;({currentPeriod.curMonthForecast} {
                    $t('card_controller_forecast')
                  })
                </span>
              </Amount>
            </div>
            <div className="col-12">
              <Amount {...lastMonthPeriod} />
            </div>
            <div className="col-12">
              <Amount {...averagePeriod} />
            </div>
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
    return 'card-sensor';
  }

  static get propTypes() {
    return {
      sensor: PropTypes.object,
    };
  }
}