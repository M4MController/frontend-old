'use strict';

import React from 'react';

import 'index.scss';

export default class extends React.Component {
  render() {
    let img = 'public/no-image.jpg';
    let username = 'Unnamed';
    return (
      <div className='container'>
        <img src={img} className='avatar'/>
        <span className='username'>{username}</span>
      </div>
    );
  }
}