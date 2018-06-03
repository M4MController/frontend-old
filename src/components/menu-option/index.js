/**
 * Created by ed on 24/05/2018.
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';
import Icon from 'src/components/icon';
import Bubble from 'src/components/bubble';

import './index.scss';

export default class extends React.Component {
  render() {
    return (
      <div className="m-option">
        <Link to={this.props.linkTo} className={
          `m-option__item ${this.props.isActive ?
            'active-item' : ''}`
        }>
          <Icon className="m-option__icon" name={this.props.icon}/>
          <span className="m-option__caption text-default">
            {this.props.caption}
          </span>
          <span className="m-option__array">
          </span>
          {
            this.props.counter ? (
              <Bubble mode="ok" className="m-option__counter">
                {this.props.counter}
              </Bubble>) : ''
          }
        </Link>
        {
          (this.props.items || []).map(object =>
            <Link to={object.linkTo} className={
              `m-option__item m-option__item__child ${object.isActive ?
                'active-item' : ''}`}
            key={object.id}>
              <i className="m-option__dot"/>
              {object.caption}
            </Link>)
        }
      </div>
    );
  }

  get displayName() {
    return 'MenuOptions';
  }

  static get propTypes() {
    return {
      icon: PropTypes.string,
      caption: PropTypes.string,
      linkTo: PropTypes.string,
      counter: PropTypes.any,
      items: PropTypes.array,
      isActive: PropTypes.bool,
    };
  }
}

