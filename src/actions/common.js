/**
 * Created by ed on 19/04/2018.
 */

'use strict';

export function fetchForObjectsPage() {
  return {
    type: fetchForObjectsPage.toString(),
  };
}

fetchForObjectsPage.toString = () => 'FETCH_FOR_OBJECTS_PAGE';

export function changeCurrentObject(objectId) {
  return {
    type: changeCurrentObject.toString(),
    objectId,
  };
}

changeCurrentObject.toString = () => 'CHANGE_CURRENT_OBJECT';

export function fetchForObjectPage(objectId) {
  return {
    type: fetchForObjectPage.toString(),
    objectId,
  };
}

fetchForObjectPage.toString = () => 'FETCH_FOR_OBJECT_PAGE';
