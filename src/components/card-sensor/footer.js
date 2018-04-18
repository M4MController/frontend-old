/**
 * Created by ed on 27/04/2018.
 */

'use strict';

import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {AmountTable, AmountTableRow} from 'src/components/card/amounttable';

export default class extends React.Component {
  render() {
    return (
      <div className="controller__footer">
        <AmountTable>
          <AmountTableRow responsive="true">
            <span>{$t('card_controller_accural')}</span>
            <i className="n-mark">{100}</i>
          </AmountTableRow>
          <AmountTableRow responsive="true">
            <span>{$t('card_controller_overpay')}</span>
            <i className="n-mark">{1000}</i>
          </AmountTableRow>
          <AmountTableRow responsive="true">
            <span>{$t('card_controller_summary')}</span>
            <i className="n-mark">{2000}</i>
          </AmountTableRow>
        </AmountTable>
        <div className="card__col">
          <Link to="/" className="btn btn_ok">{$t('card_object_pay')}</Link>
        </div>
      </div>
    );
  }

  static get displayName() {
    return 'card-sensor-header-ok';
  }

  static get propTypes() {
    return {
      sensor: PropTypes.object,
    };
  }
}
