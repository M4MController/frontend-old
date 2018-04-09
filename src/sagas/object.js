/**
 * Created by ed on 31/03/2018.
 */

'use strict';

import {takeEvery, put, call, cancel} from 'redux-saga/effects';

import api from 'src/api';

import * as executionActions from 'src/actions/execution';
import * as objectActions from 'src/actions/object';

const userObjectsRequest = api.userObjects();

const updateAll = function* (action) {
  if (action.response) yield cancel(); // if items are provided we're not need to fetch them
  yield put(executionActions.start(objectActions.updateAll));
  try {
    const objects = yield call(() => userObjectsRequest.execute());
    yield put(objectActions.updateAll(objects));
    yield put(executionActions.done(objectActions.updateAll));
  } catch (error) {
    yield put(executionActions.fail(objectActions.updateAll, error));
  }
};

export default function* () {
  yield takeEvery(objectActions.updateAll, updateAll);
}
