/**
 * Created by ed on 29/03/2018.
 */

'use strict';

import {all} from 'redux-saga/effects';

import language from './language';

export default function* () {
  yield all([
    language(),
  ]);
}
