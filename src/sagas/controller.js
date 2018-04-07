/**
 * Created by YAX on 6/03/2018
 */

'use strict';

import api from '../api';
import * as controllerActions from '../actions/controller';
import {put, call, takeEvery} from 'redux-saga/effects';
import * as executionAction from '../actions/execution';

const userControllers = api.userObjectControllers();

function *fetchControllers(action){
    yield put(executionAction.start(controllerActions.fetchControllers));
    try{
        const response = yield call(() => userControllers.execute());
        yield put(controllerActions.fetchControllers(action.objectId, response));
        yield put(executionAction.done(controllerActions.fetchControllers));

    } catch(err){
        yield put(executionAction.fail(controllerActions.fetchControllers, err));
    }

}

export default function *(){
    yield takeEvery(controllerActions.fetchControllers, fetchControllers);
}