/**
 * Created by ed on 27/04/2018.
 */

'use strict';

import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export default class extends React.Component {
  render() {
    const controllersError = false; // todo:
    const btnClass = controllersError ? 'btn btn_warning' : 'btn btn_neutral';
    return (
      <div className="controller__header">
        <div className="card__col">
          <h2 className="card__title">{this.props.sensor.name}</h2>
          <span className="controller__company-name">{this.props.sensor.company}</span>
        </div>
        <div className="card__col">
          <Link to="/" className={btnClass}>{$t('card_object_more')}</Link>
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
