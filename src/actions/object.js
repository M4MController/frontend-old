/**
 * Created by ed on 31/03/2018.
 */

'use strict';

export function fetchObjects() {
  return {
    type: fetchObjects.toString(),
  };
}

fetchObjects.toString = () => 'FETCH_OBJECTS';

export function createObject(payload) {
  return {
    type: createObject.toString(),
    payload,
  };
}

createObject.toString = () => 'CREATE_OBJECT';
