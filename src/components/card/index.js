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

  Header (props) {
    let headerClassName = 'card__header ';
    headerClassName += props.ok === true ? 'card__header_ok' : 'card__header_error';
    return (
      <div className="card__header-wrapper">
        <div className={headerClassName}>
          {props.children}
        </div>
      </div>
    );
  }

  Body (props) {
    return (
      <div className="card__body">
        {props.children}
      </div>
    );
  }

  Footer (props) {
    return (
      <div className="card__footer">
        {props.children}
      </div>
    );
  }

  render () {
    return (
      <div className="card">
        <this.Header ok={this.props.ok}>
          {this.props.children[0]}
        </this.Header>
        <this.Body>
          {this.props.children[1]}
        </this.Body>
        <this.Footer>
          {this.props.children[2]}
        </this.Footer>
      </div>
    );
  }

  get displayName() {
    return 'Card';
  }

  static get propTypes () {
    return {
      children: PropTypes.node,
      ok: PropTypes.bool,
    };
  }
}