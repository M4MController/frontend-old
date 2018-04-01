/**
 * Created by ed on 01/04/2018.
 */

'use strict';

import {
  START,
  DONE,
  FAILED,
} from 'src/actionTypes/execution';

export function start(actionName) {
  return {
    type: START,
    actionName: actionName,
  };
}

export function done(actionName) {
  return {
    type: DONE,
    actionName: actionName,
  };
}

export function fail(actionName, error = 'error info has not provided') {
  return {
    type: FAILED,
    actionName: actionName,
    error: error,
  };
}
