/**
 * Created by ed on 17/03/2018.
 */

'use strict';

import {combineReducers} from 'redux';
import {t} from 'i18next';

import data from './data';
import execution from './execution';
import language from './language';
import object from './objects';

window.$t = t;

export default combineReducers({
  data,
  execution,
  language,
  object,
});
