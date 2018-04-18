/**
 * Created by YAX on 6/03/2018
 */

'use strict';

export function fetchControllers(objectId) {
  return {
    type: fetchControllers.toString(),
    objectId,
  };
}

fetchControllers.toString = () => 'FETCH_CONTROLLERS';

export function createController(payload) {
  return {
    type: createController.toString(),
    payload,
  };
}

createController.toString = () => 'CREATE_CONTROLLER';
