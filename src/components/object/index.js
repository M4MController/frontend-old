/**
 * Created by Dmitry Zaytsev on 25/03/2018.
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Card from 'src/components/card/index';
import {AmountTable, AmountTableRow} from 'src/components/card/amounttable/index';

import './index.scss';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.Header = this.Header.bind(this);
    this.Body = this.Body.bind(this);
    this.Footer = this.Footer.bind(this);
  }

  HeaderOk(props) {
    return (
      <div className="object__header">
        <div className="card__col">
          <h2 className="card__title">{props.object.name}</h2>
          <span className="object__controllers-info">
            <i className="n-mark n-mark_ok">{props.object.sensors.length}</i>
            {$t('card_object_active_controllers', {count: props.object.sensors.length})}
          </span>
        </div>
        <div className="card__col">
          <Link to={`/object/${props.object.id}`} className="btn btn_neutral">{$t('card_object_more')}</Link>
        </div>
      </div>
    );
  }

  HeaderError(props) {
    return (
      // todo:
      <div className="object__header">
        <div className="card__col">
          <h2 className="object__title">{props.object.name}</h2>
          <span className="object__controllers-info">
            <i className="n-mark n-mark_error">{'props.controllersErrorsCount'}</i>
            {$t('card_object_error_controllers', {count: 'props.errorsCount'})}
          </span>
        </div>
        <div className="card__col">
          <Link to={`/object/${props.object.id}`} className="btn btn_warning">{$t('card_object_more')}</Link>
        </div>
      </div>
    );
  }

  Header(props) {
    const controllersErrorsCount = 0;// todo: props.controllersErrorsCount;
    if (controllersErrorsCount && controllersErrorsCount > 0) {
      return <this.HeaderError {...props} />;
    }
    return <this.HeaderOk {...props} />;
  }

  Body(props) {
    const sensors = props.object.controllers.map(c => c.sensors).reduce((s, c) => (c || []).concat(s), []);
    // const sensors =
    //   props.controllers[props.object.id].map(c => props.sensors[c.id]).reduce((s, c) => (c || []).concat(s), []);

    const counters = sensors.map(sensor => ({
      name: sensor.name,
      value: sensor.data.sort((a, b) => a.date > b.date)[0].value,
    }));

    const length = counters.length;
    let divider = length / 2;
    const countersArrRight = counters.slice(-divider);
    if (length % 2 !== 0) {
      divider++;
    }
    const countersArrLeft = counters.slice(0, divider);

    return (
      <div className="object__body">
        <AmountTable>
          {countersArrLeft.map((c, index) => {
            return (
              <AmountTableRow key={index} rowClass="amount-table__row_big">
                {c.name}
                <i className="n-mark n-mark_ok">{c.value}</i>
              </AmountTableRow>
            );
          })}
        </AmountTable>
        <AmountTable>
          {countersArrRight.map((c, index) => {
            return (
              <AmountTableRow key={index} rowClass="amount-table__row_big" responsive="true">
                {c.name}
                <i className="n-mark n-mark_ok">{c.value}</i>
              </AmountTableRow>
            );
          })}
        </AmountTable>
      </div>
    );
  }

  Footer(props) {
    return (
      <div className="object__footer">
        <AmountTable>
          <AmountTableRow>
            <span>{$t('card_object_current_month')}</span>
            <i className="n-mark">{'props.curMonthAmount'}</i>
          </AmountTableRow>
          <AmountTableRow>
            <span>{$t('card_object_last_month')}</span>
            <i className="n-mark">{'props.lastMonthAmount'}</i>
          </AmountTableRow>
          <AmountTableRow>
            <span>{$t('card_object_average_year')}</span>
            <i className="n-mark">{'props.yearAverageAmount'}</i>
          </AmountTableRow>
        </AmountTable>
        <div className="card__col">
          <Link to="/" className="btn btn_ok">{$t('card_object_pay')}</Link>
        </div>
      </div>
    );
  }

  render() {
    const status = this.props.controllersErrorsCount === 0;
    return (
      <Card ok={status}
            header={this.Header(this.props)}
            footer={this.Footer(this.props)}
      >
        <this.Body {...this.props} />
      </Card>
    );
  }

  get displayName() {
    return 'Object';
  }

  static get propTypes() {
    return {
      object: PropTypes.object,
      controllers: PropTypes.object,
      sensors: PropTypes.object,
      data: PropTypes.object,
      controllersErrorsCount: PropTypes.number,
    };
  }
}