'use strict';

import React from 'react';
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

      this.menuElems = [{text: "Log out", onClick: this.hideMenu},
                        {text: "Item 2", onClick: this.hideMenu},
                        {text: "Item 3", onClick: this.hideMenu},];
  }

  handleClick(event) {
    const domNode = ReactDOM.findDOMNode(this);

    if(!domNode || !domNode.contains(event.target))
      this.setState({showMenu: false});
  }

  toggle() {
    this.setState({showMenu: !this.state.showMenu});
  }

  componentWillMount() {
    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmoun() {
    document.removeEventListener('click', this.handleClick);
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
    let img = 'public/images/no-image.jpg';
    let username = 'Unnamed';
    if(this.props.user)
      img = (this.props.user.secondName + this.props.user.familyName) || username;
    return (
      <div className='container'>
        <img src={img} className='avatar'/>
        <span className='username'>{username}</span>
        <img src='public/images/down-arrow.png' className='drop-down' onClick={this.toggle}/>

        {this.getMenu()}
      </div>
    );
  }
}