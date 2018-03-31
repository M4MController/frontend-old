/**
 * Created by ed on 31/03/2018.
 */

'use strict';

import {takeEvery, put, call} from 'redux-saga/effects';
import * as objectActions from 'src/actionTypes/object';
import api from 'src/api';

const userObjectsRequest = api.userObjects();

const fetchObjects = function* () {
  yield put({type: objectActions.FETCH_BEGAN});
  try {
    const objects = yield call(userObjectsRequest.execute.bind(userObjectsRequest));
    yield put({type: objectActions.FETCH_SUCCEED, items: objects});
  } catch (error) {
    yield put({type: objectActions.FETCH_FAILED, error});
  }

};

export default function* () {
  yield takeEvery(objectActions.FETCH, fetchObjects);
}
