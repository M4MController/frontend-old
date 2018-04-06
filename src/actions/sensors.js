import {GET_SENSORS} from '../actionTypes/object';

export function getSensors(controller_id, response = undefined) {
  return {
    type: GET_SENSORS,
    controller_id,
    response,
  };
}

getSensors.toString = () => GET_SENSORS;