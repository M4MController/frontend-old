/**
 * Created by YAX on 30/04/2018.
 */

'use strict';

import React from 'react';
import ModularWindow from '../ModularWindow/index'

import 'index.scss'

export default class ControllerWindow extends React.Component{
  constructor(props){
    super(props);

    this.state = {address: "00:00:00:00:00"};
    this.submitAction = props.submitAction;
    this.submit = this.submit.bind(this);
  }

  submit(event){
    this.submitAction();
    alert("!");
    console.log("!");
    event.preventDefault();
  }


  render(){
    const wid = '800px';//'350px';
    const hei = '110px';

    return (
      <ModularWindow width={wid} height={hei}>
        <div className='controller-head'>
          Controller
        </div>
        <div className='controller-body'>
          <form onSubmit={this.submit}>
            <label>Mac address: </label>
            <input type='text'
              pattern='[0-9a-fA-f]{2}:[0-9a-fA-f]{2}:[0-9a-fA-f]{2}:[0-9a-fA-f]{2}:[0-9a-fA-f]{2}:[0-9a-fA-f]{2}'/>
              <input type='submit' value='Enter' className='controller-button'/>
          </form>
        </div>
      </ModularWindow>
    )
  }
}
