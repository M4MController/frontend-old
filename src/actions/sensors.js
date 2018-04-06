import {GET_SENSORS} from '../actionTypes/object';

export function getSensors(controller_id, items = undefined) {
  return {
    type: GET_SENSORS,
    controller_id,
    items,
  };
}

getSensors.toString = () => GET_SENSORS;