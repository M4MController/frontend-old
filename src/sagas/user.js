/**
 * Created by ed on 16/05/2018.
 */

'use strict';

import {takeEvery, call, put} from 'redux-saga/effects';
import api from 'src/api';
import * as userActions from 'src/actions/user';
import * as authAction from 'src/actions/auth';
import * as executionAction from 'src/actions/execution';

const fetchUserInfo = function* (action) {
  yield put(executionAction.start(action.type));
  try {
    const user = yield call(() => api.userInfo().execute());
    yield put(authAction.setAuthState(true));
    yield put(userActions.createUser(user));
    yield put(executionAction.done(action.type));
  } catch (e) {
    yield put(executionAction.fail(action.type, e));
    yield put(authAction.setAuthState(false));
  }
};

export default function* () {
  yield takeEvery(userActions.fetchUserInfo, fetchUserInfo);
}
