/**
 * Created by Dmitry Zaytsev on 25/03/2018.
 */

'use strict';

import React from 'react';
import ScrollArea from 'react-scrollbar';

import 'index.scss';

export default class extends React.Component {
  constructor(props){
    super(props);
  }

  Block(props) {
    return (
      <div className="objects-container__block">
        {props.content}
      </div>
    );
  }

  render () {
	  const blocks = this.props.children;
    return (
      <ScrollArea className="objects-container">
        {blocks.map(block => {
          return <this.Block content={block} />;
        })}
      </ScrollArea>
    );
  }

  get displayName() {
    return 'ObjectsContainer';
  }
}