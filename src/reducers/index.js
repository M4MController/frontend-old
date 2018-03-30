/**
 * Created by ed on 17/03/2018.
 */

'use strict';

import {combineReducers} from 'redux';
import {t} from 'i18next';

import language from './language';

window.$t = t;

export default combineReducers({
  language,
});
