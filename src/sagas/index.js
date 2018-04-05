/**
 * Created by ed on 29/03/2018.
 */

'use strict';

import {all} from 'redux-saga/effects';

import data from './data';
import language from './language';
import object from './object';

export default function* () {
  yield all([
    data(),
    language(),
    object(),
  ]);
}
