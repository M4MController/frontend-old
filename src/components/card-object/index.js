/**
 * Created by Dmitry Zaytsev on 25/03/2018.
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import Card from 'src/components/card';
import HeaderOk from './headerOk';
import HeaderError from './headerError';
import Footer from './footer';
import Body from './body';

import 'index.scss';

export default class extends React.Component {
  render() {
    const status = true; // todo:
    return (
      <Card
        ok={status}
        header={
          status ? <HeaderOk object={this.props.object}/> : <HeaderError object={this.props.object}/>
        }
        footer={<Footer object={this.props.object}/>}
      >
        <Body object={this.props.object}/>
      </Card>
    );
  }

  get displayName() {
    return 'card-object';
  }

  static get propTypes() {
    return {
      object: PropTypes.object,
    };
  }
}
