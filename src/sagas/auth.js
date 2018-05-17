/**
 * Created by ed on 16/05/2018.
 */

'use strict';

import {takeEvery, call, put} from 'redux-saga/effects';
import api from 'src/api';
import * as authAction from 'src/actions/auth';
import * as executionAction from 'src/actions/execution';

const authorization = function* (action) {
  yield put(executionAction.start(action.type));
  try {
    yield call(() => api.authorization().execute(action.login, action.password));
    yield put(authAction.setAuthState(true));
    yield put(executionAction.done(action.type));
  } catch (e) {
    yield put(executionAction.fail(action.type, e));
    yield put(authAction.setAuthState(false));
  }
};

export default function* () {
  yield takeEvery(authAction.authorization, authorization);
}
