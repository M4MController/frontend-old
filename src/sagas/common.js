/**
 * Created by ed on 19/04/2018.
 */

'use strict';

import {takeEvery, call, put} from 'redux-saga/effects';

import {start, done, fail} from 'src/actions/execution';
import {createObject} from 'src/actions/object';
import {createController} from 'src/actions/controller';
import {createSensor, createSensorStats} from 'src/actions/sensors';
import {createData} from 'src/actions/data';
import {fetchForObjectsPage, fetchForObjectPage} from 'src/actions/common';

import api from 'src/api';

const fetchForObjectsPageSaga = function* (action) {
  try {
    yield put(start(action.type));
    for (let object of yield call(() => api.userObjects().execute())) {
      yield put(createObject(object));
      for (let controller of yield call(() => api.userObjectControllers().execute(object.id))) {
        yield put(createController(controller));
        for (let sensor of yield call(() => api.userControllerSensors().execute(controller.id))) {
          yield put(createSensor(sensor));
          for (let data of yield call(() => api.userSensorData().execute(sensor.id))) {
            yield put(createData(data));
          }
        }
      }
    }
    yield put(done(action.type));
  } catch (error) {
    yield put(fail(action.type, error));
  }
};

const fetchForObjectPageSaga = function* (action) {
  try {
    yield put(start(action.type));
    for (let object of yield call(() => api.userObjects().execute())) {
      yield put(createObject(object));
      for (let controller of yield call(() => api.userObjectControllers().execute(object.id))) {
        yield put(createController(controller));
        for (let sensor of yield call(() => api.userControllerSensors().execute(controller.id))) {
          yield put(createSensor(sensor));
          const stats = yield call(() => api.userSensorStats().execute(sensor.id));
          yield put(createSensorStats({
            ...stats,
            sensor: sensor.id,
          }));
          for (let data of yield call(() => api.userSensorData().execute(sensor.id))) {
            yield put(createData(data));
          }
        }
      }
    }
    yield put(done(action.type));
  } catch (error) {
    yield put(fail(action.type, error));
  }
};

export default function* () {
  yield takeEvery(fetchForObjectsPage.toString(), fetchForObjectsPageSaga);
  yield takeEvery(fetchForObjectPage.toString(), fetchForObjectPageSaga);
}
