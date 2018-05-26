'use strict';

import React from 'react';

import Menu from './Pop-Up-Menu';

import 'index.scss';

export default class extends React.Component {
  constructor(props) {
      super(props);

      this.getMenu = this.getMenu.bind(this);
      this.toggle = this.toggle.bind(this);
      this.state = {showMenu: false};
  }

  toggle() {
    this.setState({showMenu: !this.state.showMenu});
  }

  getMenu() {
    if(this.state.showMenu)
      return (<Menu className="visible"/>);

    return (<noscript/>);
  }
  render() {
    let img = 'public/no-image.jpg';
    let username = 'Unnamed';
    return (
      <div className='container'>
        <img src={img} className='avatar'/>
        <span className='username'>{username}</span>
        <span className='username' onClick={this.toggle}>X</span>
        {this.getMenu()}
      </div>
    );
  }
}