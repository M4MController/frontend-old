/**
 * Created by ed on 24/04/2018.
 */

'use strict';

import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {AmountTable, AmountTableRow} from 'src/components/card/amounttable';

export default class extends React.Component {
  render() {
    const object = this.props.object;
    const stats = object.stats || {}; // todo: use object stats record

    return (
      <div className="object__footer">
        <AmountTable>
          <AmountTableRow>
            <span>{$t('card_object_current_month')}</span>
            <i className="n-mark">{stats.curMonthAmount || 100}</i>
          </AmountTableRow>
          <AmountTableRow>
            <span>{$t('card_object_last_month')}</span>
            <i className="n-mark">{stats.lastMonthAmount || 185}</i>
          </AmountTableRow>
          <AmountTableRow>
            <span>{$t('card_object_average_year')}</span>
            <i className="n-mark">{stats.yearAverageAmount || 5896}</i>
          </AmountTableRow>
        </AmountTable>
        <div className="card__col">
          <Link to="/" className="btn btn_ok">{$t('card_object_pay')}</Link>
        </div>
      </div>
    );
  }

  static get displayName() {
    return 'card-object-footer';
  }

  static get propTypes() {
    return {
      object: PropTypes.object,
    };
  }
}
