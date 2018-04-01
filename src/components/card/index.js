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

  render() {
    const header = this.props.header ? (
      <this.Header ok={this.props.ok}>
        {this.props.header}
      </this.Header>
    ) : undefined;
    const footer = this.props.footer ? (
      <this.Footer>
        {this.props.footer}
      </this.Footer>
    ) : undefined;

    return (
      <div className="card">
        {header}
        <this.Body>
          {this.props.children}
        </this.Body>
        {footer}
      </div>
    );
  }

  get displayName() {
    return 'Card';
  }

  static get propTypes() {
    return {
      header: PropTypes.node,
      footer: PropTypes.node,
      children: PropTypes.node,
      ok: PropTypes.bool,
    };
  }
}