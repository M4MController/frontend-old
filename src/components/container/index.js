/**
 * Created by Dmitry Zaytsev on 25/03/2018.
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import ScrollArea from 'react-scrollbar';

import 'index.scss';

export default class extends React.Component {
  constructor(props){
    super(props);
  }

  Block(props) {
    return (
      <div className="blocks-container__block">
        {props.content}
      </div>
    );
  }

  render () {
    const blocks = this.props.children || [];
    return (
      <ScrollArea className="blocks-container">
        {blocks.map((block, index) => {
          return <this.Block key={index} content={block} />;
        })}
      </ScrollArea>
    );
  }

  get displayName() {
    return 'BlocksContainer';
  }

  static get propTypes () {
    return {
      children: PropTypes.node,
    };
  }
}