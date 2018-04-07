/**
 * Created by ed on 04/04/2018.
 */

'use strict';

import {takeEvery, put, call, cancel} from 'redux-saga/effects';

import api from 'src/api';

import * as executionActions from 'src/actions/execution';
import * as dataActions from 'src/actions/data';

const sensorDataRequest = api.userSensorData();

const updateSensor = function* (action) {
  if (action.items) yield cancel(); // if items are provided we're not need to fetch them
  yield put(executionActions.start(dataActions.updateSensor));
  try {
    const data = yield call(() => sensorDataRequest.execute(action.sensorId, action.date.toString(), action.limit));
    yield put(dataActions.updateSensor(action, data));
    yield put(executionActions.done(dataActions.updateSensor));
  } catch (error) {
    yield put(executionActions.fail(dataActions.updateSensor, error));
  }
};

export default function* () {
  yield takeEvery(dataActions.updateSensor, updateSensor);
}
