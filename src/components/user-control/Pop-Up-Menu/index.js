'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import 'index.scss';

export default class extends React.Component{
  render() {
    let elements = this.props.elements || [];

    return (
      <div className={`menu-container ${this.props.className}`}>
        {
          elements.map((elem) => (
            <div onClick={elem.onClick}
              className={`menu-item ${elem.className}`}
              key={elem.text}>
              {elem.text}
            </div>
          ))
        }
      </div>
    );
  }

  static get displayName() {
    return 'UserControlPopUpMenu';
  }

  static get propTypes() {
    return {
      elements: PropTypes.array,
      className: PropTypes.string,
    };
  }
}