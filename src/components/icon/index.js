/**
 * Created by ed on 27/05/2018.
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component {
  render() {
    return (
      <img className={this.props.className} src={`/icons/${this.props.name}.svg`}/>
    );
  }

  get displayName() {
    return 'Icon';
  }

  static get propTypes() {
    return {
      name: PropTypes.string,
      className: PropTypes.string,
    };
  }
}

