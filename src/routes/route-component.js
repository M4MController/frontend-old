/**
 * Created by ed on 18/03/2018.
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component {
  static get propTypes () {
    return {
      match: PropTypes.shape({
        params: PropTypes.shape({}),
      }),
    };
  }

  get displayName () { return 'RouteComponent'; }

  get params () {
    return this.props.match && this.props.match.params || {};
  }
}
