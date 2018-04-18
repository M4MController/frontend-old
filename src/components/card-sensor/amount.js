/**
 * Created by ed on 27/04/2018.
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component {
  render() {
    const curPercent = this.props.percent;
    const leftPercent = 100 - curPercent;
    const barChartStyle = {
      background: `linear-gradient(to right, #17aca6 ${curPercent}%, #e0e2e0 ${leftPercent}%)`,
    };
    return (
      <div className="controller__row">
        <div className="controller__info">
          <span className="card__col">{this.props.periodName}</span>
          <span className="card__col">
            {this.props.periodAmount} W
            {this.props.children}
          </span>
        </div>
        <div className="controller__bar-chart" style={barChartStyle}/>
      </div>
    );
  }

  static get displayName() {
    return 'card-sensor-header-ok';
  }
  
  static get propTypes() {
    return {
      periodName: PropTypes.string,
      percent: PropTypes.number,
      periodAmount: PropTypes.number,
      children: PropTypes.node,
    };
  }
}
