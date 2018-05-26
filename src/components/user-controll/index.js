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
      this.hideMenu = this.hideMenu.bind(this);

      this.menuElems = [{text: "Log out", onClick: this.hideMenu},];
  }

  toggle() {
    this.setState({showMenu: !this.state.showMenu});
  }

  hideMenu() {
    this.setState({showMenu: false});
  }

  getMenu() {
    if(this.state.showMenu)
      return (<Menu elements={this.menuElems} className="visible"/>);

    return (<noscript/>);
  }
  render() {
    let img = 'public/no-image.jpg';
    let username = 'Unnamed';
    if(this.props.user)
      img = (this.props.user.secondName + this.props.user.familyName) || username;
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