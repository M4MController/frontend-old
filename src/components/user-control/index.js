'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import Icon from 'src/components/icon';

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
      <div className={this.props.className}>
        <div className="container" onClick={this.toggle}>
          <Icon name="man" className='avatar'/>
          <div className='username'>{username}</div>
          <img src='/icons/down-arrow.svg' className='drop-down'/>
        </div>
        {this.getMenu()}
      </div>
    );
  }

  static get propTypes() {
    return {
      user: PropTypes.object,
      onLogout: PropTypes.func,
      className: PropTypes.string,
    };
  }
}