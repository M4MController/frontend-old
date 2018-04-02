/**
 * Created by Dmitry Zaytsev on 01/04/2018.
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import 'index.scss';

class AmountTable extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    const rows = this.props.children;
    return (
      <table className="card__col">
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
  
  get displayName() {
    return 'AmountTable';
  }

  static get propTypes () {
    return {
      children: PropTypes.node,
    };
  }
}

class AmountTableRow extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    const data = this.props.children;
    let className = 'amount-table__name';
    let classAmount = 'amount-table__amount';
    if (!this.props.responsive) {
      className += ' amount-table__row_left';
      classAmount += ' amount-table__row_right';
    }
    return (
      <tr className={this.props.rowClass}>
        <td className={className}>{data[0]}</td>
        <td className={classAmount}>{data[1]} ₽</td>
      </tr>
    );
  }

  get displayName() {
    return 'AmountTableRow';
  }

  static get propTypes () {
    return {
      children: PropTypes.node,
      responsive: PropTypes.string,
      rowClass: PropTypes.string,
    };
  }
}

export {AmountTable, AmountTableRow};