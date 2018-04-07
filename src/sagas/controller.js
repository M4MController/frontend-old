/**
 * Created by YAX on 6/03/2018
 */

'use strict';

import api from '../api';
import * as controllerActions from '../actions/controller';
import {put, call, takeEvery} from 'redux-saga/effects';
import * as executionAction from '../actions/execution';

const userControllers = api.userControllers();

function *fetchControllers(action){

}

export default function *(){
    yield takeEvery(controllerActions.fetchControllers, fetchControllers);
}