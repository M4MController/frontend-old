'use strict';

import React from 'react';

import 'index.scss';

export default class extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {

    let elements = this.props.elements || [];
    console.log(elements);

    return (
      <div className='menu-container'>
        {
          elements.map((elem) => <div onClick={elem.onClick} className='menu-item'>{elem.text}</div>)
        }
      </div>
    )
  }
}