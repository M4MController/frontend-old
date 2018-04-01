/**
 * Created by Dmitry Zaytsev on 01/04/2018.
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from 'src/components/card';
import { AmountTable, AmountTableRow } from 'src/components/card/amounttable';

import 'index.scss';

export default class extends React.Component {
  constructor(props){
    super(props);
    this.Body = this.Body.bind(this);
    this.Footer = this.Footer.bind(this);
  }

  Header (props) {
    const controllersError = props.controllersError;
    const btnClass = controllersError ? 'btn btn_warning' : 'btn btn_neutral';
    return (
      <div className="controller__header">
        <div className="card__col">
          <h2 className="card__title">{props.controllerName}</h2>
          <span className="controller__company-name">{props.companyName}</span>
        </div>
        <div className="card__col">
          <Link to="/" className={btnClass}>{$t('card_object_more')}</Link>
        </div>
      </div>
    );
  }

  ControllerAmount (props) {
    const curPercent = props.percent;
    const leftPercent = 100 - curPercent;
    const barChartStyle = {
      background: `linear-gradient(to right, #17aca6 ${curPercent}%, #e0e2e0 ${leftPercent}%)`,
    };
    return (
      <div className="controller__row">
        <div className="controller__info">
          <span className="card__col">{props.periodName}</span>
          <span className="card__col">
            {props.periodAmount} W 
            {props.children}
          </span>
        </div>
        <div className="controller__bar-chart" style={barChartStyle}></div>
      </div>
    );
  }

  Body (props) {
    const forecast = props.curMonthForecast;
    const currentPeriod = {
      periodName: $t('card_controller_current_month'),
      periodAmount: props.curMonthAmount,
      percent: 100 * props.curMonthAmount / forecast,
    };
    const lastMonthPeriod = {
      periodName: $t('card_controller_last_month'),
      periodAmount: props.lastMonthAmount,
      percent: forecast < props.lastMonthAmount ? 100 * props.curMonthAmount / forecast : 100,
    };
    const averagePeriod = {
      periodName: $t('card_controller_average_year'),
      periodAmount: props.yearAverageAmount,
      percent: forecast < props.yearAverageAmount ? 100 * props.curMonthAmount / forecast : 100,
    };
    return (
      <div className="controller__body">
        <this.ControllerAmount {...currentPeriod}>
          <span className="controller__payment-forecast">
            &nbsp;({props.curMonthForecast} {$t('card_controller_forecast')})
          </span>
        </this.ControllerAmount>
        <this.ControllerAmount {...lastMonthPeriod} />
        <this.ControllerAmount {...averagePeriod} />
      </div>
    );
  }

  Footer (props) {
    return (
      <div className="controller__footer">
        <AmountTable>
          <AmountTableRow responsive="true">
            <span>{$t('card_controller_accural')}</span>
            <i className="n-mark">{props.accural}</i>
          </AmountTableRow>
          <AmountTableRow responsive="true">
            <span>{$t('card_controller_overpay')}</span>
            <i className="n-mark">{props.overpay}</i>
          </AmountTableRow>
          <AmountTableRow responsive="true">
            <span>{$t('card_controller_summary')}</span>
            <i className="n-mark">{props.summary}</i>
          </AmountTableRow>
        </AmountTable>
        <div className="card__col">
          <Link to="/" className="btn btn_ok">{$t('card_object_pay')}</Link>
        </div>
      </div>
    );
  }

  render () {
    const status = !this.props.controllerError;
    return (
      <Card ok={status}>
        <this.Header {...this.props} />
        <this.Body {...this.props} />
        <this.Footer {...this.props} />
      </Card>
    );
  }

  get displayName() {
    return 'Object';
  }

  static get propTypes () {
    return {
      controllerError: PropTypes.bool,
    };
  }
}