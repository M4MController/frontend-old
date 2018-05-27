'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import Menu from './Pop-Up-Menu';

import 'index.scss';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.getMenu = this.getMenu.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {showMenu: false};
    this.hideMenu = this.hideMenu.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.menuElems = [
      {text: 'Profile', onClick: this.hideMenu},
      {text: 'Log out', onClick: this.props.onLogout, className: 'text-danger'},
    ];
  }

  handleClick(event) {
    // eslint-disable-next-line react/no-find-dom-node
    const domNode = ReactDOM.findDOMNode(this);

    if (!domNode || !domNode.contains(event.target))
      this.setState({showMenu: false});
  }

  toggle() {
    this.setState({showMenu: !this.state.showMenu});
  }

  componentWillMount() {
    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick);
  }

  hideMenu() {
    this.setState({showMenu: false});
  }

  getMenu() {
    return (
      <Menu
        elements={this.menuElems}
        className={`user-menu user-menu__${this.state.showMenu ? 'visible' : 'hidden'}`}
      />
    );
  }

  render() {
    const username =
      `${this.props.user.familyName} ${this.props.user.secondName}`;

    return (
      <div className='container' onClick={this.toggle}>
        {/* todo: use icon component */}
        <img src="/icons/man.svg" className='avatar'/>
        <span className='username'>{username}</span>
        <img src='/icons/down-arrow.svg' className='drop-down'/>
        {this.getMenu()}
      </div>
    );
  }

  static get propTypes() {
    return {
      user: PropTypes.object,
      onLogout: PropTypes.func,
    };
  }
}