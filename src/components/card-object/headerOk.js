/**
 * Created by ed on 23/04/2018.
 */

'use strict';

import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export default class extends React.Component {
  render() {
    const object = this.props.object;
    const controllersCount = object.controllers.length;

    return (
      <div className="object__header">
        <div className="card__col">
          <h2 className="card__title">{object.name}</h2>
          <span className="object__controllers-info">
            <i className="n-mark n-mark_ok">{controllersCount}</i>
            {$t('card_object_active_controllers', {count: controllersCount})}
          </span>
        </div>
        <div className="card__col">
          <Link to={`/object/${object.id}`} className="btn btn_neutral">{$t('card_object_more')}</Link>
        </div>
      </div>
    );
  }

  static get displayName() {
    return 'card-object-header-ok';
  }


  static get propTypes() {
    return {
      object: PropTypes.object,
    };
  }
}
