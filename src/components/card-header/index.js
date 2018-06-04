/**
 * Created by ed on 27/04/2018.
 */

'use strict';

import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import Bubble from 'src/components/bubble';

import './index.scss';

export default class extends React.Component {
  render() {
    const controllersError = false; // todo:
    const btnClass = controllersError ? 'btn btn_warning' : 'btn btn_neutral';
    return (
      <div className="header-wrapper">
        <div className="header grid-fluid">
          <div className="col-6">
            <div className="header__title">{this.props.title}</div>
            <div className="header__description">
              {this.props.counter ?
                (<Bubble mode="ok">{this.props.counter}</Bubble>) :
                ''}
              {Boolean(this.props.description) && `${this.props.description}`}
            </div>
          </div>
          <div className="col-6">
            <div className="pull-right">
              {
                this.props.link ?
                  (<Link to={this.props.link} className={btnClass}>{$t(
                    'card_object_more')}</Link>) :
                  ''
              }
            </div>
          </div>
        </div>
      </div>
    );
  }

  static get displayName() {
    return 'card-header-ok';
  }

  static get propTypes() {
    return {
      title: PropTypes.string,
      link: PropTypes.string,
      counter: PropTypes.number,
      description: PropTypes.string,
      ok: PropTypes.bool,
    };
  }
}
