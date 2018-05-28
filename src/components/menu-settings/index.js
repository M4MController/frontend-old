/**
 * Created by ed on 24/05/2018.
 */

'use strict';

import React from 'react';
import MenuOption from 'src/components/menu-option';

export default class extends React.Component {
  render() {
    return (<MenuOption
      icon="settings"
      caption={$t('menu_settings_caption')}
      linkTo="/"
    />);
  }

  get displayName() {
    return 'MenuSettings';
  }
}

