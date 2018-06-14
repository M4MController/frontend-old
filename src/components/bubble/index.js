/**
 * Created by ed on 03/06/2018.
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

export default class extends React.Component {
  render() {
    return (
      <span
        className={`text-default n-mark n-mark_${this.props.mode} ${this.props.className}`}
      >{this.props.children}</span>
    );
  }

  get displayName() {
    return 'BubbleText';
  }

  static get propTypes() {
    return {
      mode: PropTypes.string,
      children: PropTypes.node,
      className: PropTypes.string,
    };
  }
}
