/**
 * Created by ed on 24/05/2018.
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import MenuOption from 'src/components/menu-option';

export default class extends React.Component {
  render() {
    return (<MenuOption
      icon="home"
      caption={$t('menu_objects_caption')}
      linkTo="/"
      items={this.props.objects.map(object => ({
        id: object.id,
        caption: object.name,
        linkTo: `/object/${object.id}`,
        isActive: object.id === this.props.currentObjectId,
      }))}
      counter={this.props.objects.length}
      isActive={this.props.isActive}
    />);
  }

  get displayName() {
    return 'MenuObjects';
  }

  static get propTypes() {
    return {
      objects: PropTypes.array,
      currentObjectId: PropTypes.any,
      isActive: PropTypes.bool,
    };
  }
}

