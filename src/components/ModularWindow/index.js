/**
 * Created by YAX on 29/04/2018.
 */

'use strict';

import React from 'react';

import 'index.scss';

export default class ModularWindow extends React.Component{
  render(){
    const wid = this.props.width || 200;
    const hei = this.props.height || 100;
    const opacity = this.props.opacity || 1;

    return (
      <div className='blocking-object' style={{backgroundColor: `rgba(1, 1, 1, ${opacity*.5})`}}>
        <div className='modular' style={{width: wid, height: hei, opacity: {opacity}}}>
          <body>
            {this.props.children}
          </body>
        </div>
      </div>
    )
  }
}
