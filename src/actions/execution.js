/**
 * Created by ed on 01/04/2018.
 */

'use strict';

export function start(actionName) {
  return {
    type: start.toString(),
    actionName: actionName,
  };
}

start.toString = () => 'EXECUTION_START';

export function done(actionName) {
  return {
    type: done.toString(),
    actionName: actionName,
  };
}

done.toString = () => 'EXECUTION_DONE';

export function fail(actionName, error = 'error info has not provided') {
  return {
    type: fail.toString(),
    actionName: actionName,
    error: error,
  };
}

fail.toString = () => 'EXECUTION_DONE';
