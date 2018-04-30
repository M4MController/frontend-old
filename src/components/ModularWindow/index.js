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
    return (
      <div className='blocking-object'>
        <div className='modular' style={{width: wid, height: hei}}>
          <body>
            {this.props.children}
          </body>
        </div>
      </div>
    )
  }
}
