/**
 * Created by Dmitry Zaytsev on 01/04/2018.
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Card from 'src/components/card';

import 'index.scss';

import Header from './header';
import Footer from './footer';
import Amount from './amount';

export default class extends React.Component {

  render () {
    const status = true;

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
      percent: forecast < stats.lastMonthAmount ? 100 * stats.curMonthAmount / forecast : 100,
    };
    const averagePeriod = {
      periodName: $t('card_controller_average_year'),
      periodAmount: stats.yearAverageAmount,
      percent: forecast < stats.yearAverageAmount ? 100 * stats.curMonthAmount / forecast : 100,
    };

    return (
      <Card ok={status}
        header={<Header sensor={this.props.sensor}/>}
        footer={<Footer sensor={this.props.sensor}/>}
      >
        <div className="controller__body">
          <Amount {...currentPeriod}>
            <span className="controller__payment-forecast">
              &nbsp;({currentPeriod.curMonthForecast} {$t('card_controller_forecast')})
            </span>
          </Amount>
          <Amount {...lastMonthPeriod} />
          <Amount {...averagePeriod} />
        </div>
      </Card>
    );
  }

  get displayName() {
    return 'card-sensor';
  }

  static get propTypes () {
    return {
      sensor: PropTypes.object,
    };
  }
}