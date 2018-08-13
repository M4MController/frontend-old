'use strict';
import React from 'react';

import 'index.scss';

export default class Spoiler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spoiler_collapsed: true,
    };

    this.renderBody = this.renderBody.bind(this);
    this.onTitleClick = this.onTitleClick.bind(this);
  }

  onTitleClick() {
    this.setState({...this.state, spoiler_collapsed: !this.state.spoiler_collapsed});
  }


  renderBody() {
    return this.state.spoiler_collapsed ? null :  (<div>{this.props.children}</div>);
  }

  render() {
    return(
      <div className={this.props.className}>
        <div onClick={this.onTitleClick}>
          {this.props.title}
        </div>
        {this.renderBody()}
      </div>
    );
  }
}