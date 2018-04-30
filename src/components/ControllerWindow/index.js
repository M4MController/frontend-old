/**
 * Created by YAX on 30/04/2018.
 */

'use strict';

import React from 'react';
import ModularWindow from '../ModularWindow/index'

import 'index.scss'

export default class ControllerWindow extends React.Component{
  constructor(props) {
    super(props);

    this.callback = props.receiveData;
    this.submitAction = this.submitAction.bind(this);
    this.textChanged = this.textChanged.bind(this);
    this.opacity = 1.0;

    this.state = {address: '00:00:00:00:00:00'};
  }

  textChanged(event){
    this.setState({address: event.target.value.toUpperCase()});
  }

  submitAction(event){
    this.callback(this.state.address);
    event.preventDefault();
  }


  render(){
    const wid = '350px';
    const hei = '110px';

    return (
      <ModularWindow width={wid} height={hei}>
        <div className='controller-head'>
          Controller
        </div>
        <div className='controller-body'>
          <form onSubmit={this.submitAction}>
            <label>Mac address: </label>
            <input type='text' onChange={this.textChanged} value={this.state.address}
              pattern='[0-9a-fA-f]{2}:[0-9a-fA-f]{2}:[0-9a-fA-f]{2}:[0-9a-fA-f]{2}:[0-9a-fA-f]{2}:[0-9a-fA-f]{2}'
            />
              <input type='submit' value='Enter' className='controller-button'/>
          </form>
        </div>
      </ModularWindow>
    )
  }
}
