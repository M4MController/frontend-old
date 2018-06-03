/**
 * Created by ed on 23/04/2018.
 */

'use strict';

import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import Bubble from 'src/components/bubble';

export default class extends React.Component {
  render() {
    const object = this.props.object;
    const controllersErrorsCount = 1; // todo:
    const errorsCount = 1; // todo:

    return (
      <div className="object__header">
        <div className="card__col">
          <h2 className="object__title">{object.name}</h2>
          <span className="object__controllers-info">
            <Bubble mode="error">{controllersErrorsCount}</Bubble>
            {$t('card_object_error_controllers', {count: errorsCount})}
          </span>
        </div>
        <div className="card__col">
          <Link to={`/object/${object.id}`} className="btn btn_warning">{$t('MORE')}</Link>
        </div>
      </div>
    );
  }

  static get displayName() {
    return 'card-object-header-error';
  }

  static get propTypes() {
    return {
      object: PropTypes.object,
    };
  }
}