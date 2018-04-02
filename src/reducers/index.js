/**
 * Created by ed on 17/03/2018.
 */

'use strict';

import {combineReducers} from 'redux';
import {t} from 'i18next';

import execution from './execution';
import language from './language';
import object from './objects';

window.$t = t;

export default combineReducers({
  execution,
  language,
  object,
});
