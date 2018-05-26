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
          elements.map((elem) => <div onClick={elem.onClick}>{elem.text}</div>)
        }
      </div>
    )
  }
}

/*
 elements.forEach((elem) => {
 <div onClick={elem.onClick}>
 {elem.text}
 </div>
 })
 */