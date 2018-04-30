import api from '../api';
import * as sensorsActions from '../actions/sensors';
import {takeEvery, put, call} from 'redux-saga/effects';
import * as executionAction from '../actions/execution';

const userControllerSensors = api.userControllerSensors();

const getSensors = function* (action) {
  yield put(executionAction.start(sensorsActions.fetchSensors));
  try {
    const object = yield call(() => userControllerSensors.execute(action.controllerId));
    yield put(sensorsActions.fetchSensors(action.controllerId, object));
    yield put(executionAction.done(sensorsActions.fetchSensors));
  } catch (error) {
    yield put(executionAction.fail(sensorsActions.fetchSensors, error));
  }
};

export default function *() {
  yield takeEvery(sensorsActions.fetchSensors, getSensors);
}