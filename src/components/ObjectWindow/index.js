/**
 * Created by YAX on 30/04/2018.
 */

'use strict';

import React from 'react';
import ModularWindow from '../ModularWindow/index'

import 'index.scss'

export default class ObjectWindow extends React.Component{
  constructor(props) {
    super(props);

    this.callback = props.receiveData;
    this.submitAction = this.submitAction.bind(this);
    this.textChangedName = this.textChangedName.bind(this);
    this.textChangedAddress = this.textChangedAddress.bind(this);
    this.opacity = 1.0;

    this.state = {name: '', address: ''};
  }

  textChangedAddress(event){
    this.setState({address: event.target.value, name: this.state.name});
  }

  textChangedName(event){
    this.setState({name: event.target.value, address: this.state.address});
  }

  submitAction(event){
    this.callback({name: this.state.name, address: this.state.address});
    event.preventDefault();
  }


  render(){
    const wid = '315px';
    const hei = '135px';

    return (
      <ModularWindow width={wid} height={hei}>
        <div className='object-head'>
          Object
        </div>
        <div className='object-body'>
          <form onSubmit={this.submitAction}>
            <label>Name: </label>
            <input type='text' onChange={this.textChangedName} value={this.state.name} style={{marginLeft: '17px'}}/>
            <label>Address: </label>
            <input type='text' onChange={this.textChangedAddress} value={this.state.address} />
            <input type='submit' value='Enter' className='object-button'/>
          </form>
        </div>
      </ModularWindow>
    )
  }
}
