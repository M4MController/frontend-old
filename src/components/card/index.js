/**
 * Created by Dmitry Zaytsev on 25/03/2018.
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import 'index.scss';

export default class extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <div className="card">
        {this.props.children}
      </div>
    );
  }

  get displayName() {
    return 'Card';
  }

  static get propTypes () {
    return {
      children: PropTypes.node,
    };
  }
}