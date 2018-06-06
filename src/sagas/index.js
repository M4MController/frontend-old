/**
 * Created by ed on 29/03/2018.
 */

'use strict';

import {all} from 'redux-saga/effects';

import auth from './auth';
import common from './common';
import language from './language';
import user from './user';

export default function* () {
  yield all([
    auth(),
    language(),
    common(),
    user(),
  ]);
}
