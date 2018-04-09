import api from '../api';
import * as sensorsActions from '../actions/sensors';
import {takeEvery, put, call, cancel} from 'redux-saga/effects';
import * as executionAction from '../actions/execution';

const userControllerSensors = api.userControllerSensors();

const getSensors = function* (action) {
  if (action.response) yield cancel(); // if items are provided we're not need to fetch them
  yield put(executionAction.start(sensorsActions.getSensors));
  try {
    const object = yield call(() => userControllerSensors.execute(action.controllerId));
    yield put(sensorsActions.getSensors(action.controllerId, object));
    yield put(executionAction.done(sensorsActions.getSensors));
  } catch (error) {
    yield put(executionAction.fail(sensorsActions.getSensors,error));
  }
};

export default function *() {
  yield takeEvery(sensorsActions.getSensors, getSensors);
}