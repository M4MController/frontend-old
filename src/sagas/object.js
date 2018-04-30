/**
 * Created by ed on 31/03/2018.
 */

'use strict';

import {takeEvery, put, call} from 'redux-saga/effects';

import api from 'src/api';

import * as executionActions from 'src/actions/execution';
import * as objectActions from 'src/actions/object';

const userObjectsRequest = api.userObjects();

const updateAll = function* (/*action*/) {
  yield put(executionActions.start(objectActions.fetchObjects));
  try {
    const objects = yield call(() => userObjectsRequest.execute());
    yield put(objectActions.fetchObjects(objects));
    yield put(executionActions.done(objectActions.fetchObjects));
  } catch (error) {
    yield put(executionActions.fail(objectActions.fetchObjects, error));
  }
};

export default function* () {
  yield takeEvery(objectActions.fetchObjects, updateAll);
}
