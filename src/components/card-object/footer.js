/**
 * Created by ed on 24/04/2018.
 */

'use strict';

import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import Bubble from 'src/components/bubble';
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
            <Bubble mode="ok">{stats.curMonthAmount || 100}</Bubble>
          </AmountTableRow>
          <AmountTableRow>
            <span>{$t('card_object_last_month')}</span>
            <Bubble mode="ok">{stats.lastMonthAmount || 185}</Bubble>
          </AmountTableRow>
          <AmountTableRow>
            <span>{$t('card_object_average_year')}</span>
            <Bubble mode="ok">{stats.yearAverageAmount || 5896}</Bubble>
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
