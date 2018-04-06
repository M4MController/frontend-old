import api from '../api';
import * as sensorsActions from '../actions/sensors';
import {takeEvery, put, call} from 'redux-saga/effects';
import * as executionAction from '../actions/execution';

const userControllerSensors = api.userControllerSensors();

const getSensors = function* (action) {
  yield put(executionAction.start(sensorsActions.getSensors));
  try {
    const object = yield call(() => userControllerSensors.execute(action.controller_id));
    yield put(sensorsActions.getSensors(action.controller_id,object));
    yield put(executionAction.done(sensorsActions.getSensors));
  } catch (error) {
    yield put(executionAction.fail(sensorsActions.getSensors,error));
  }
};

export default function *() {
  yield takeEvery(sensorsActions.getSensors, getSensors);
}