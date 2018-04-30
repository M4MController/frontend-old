/**
 * Created by ed on 17/03/2018.
 */

'use strict';

import {combineReducers} from 'redux';
import {createReducer} from 'redux-orm';

import orm from 'src/models';

import common from './common';
import execution from './execution';
import language from './language';

export default combineReducers({
  orm: createReducer(orm),
  common,
  execution,
  language,
});
