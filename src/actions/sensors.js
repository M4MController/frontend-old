import {GET_SENSORS} from '../actionTypes/sensors';

export function getSensors(controllerId, response = undefined) {
  return {
    type: GET_SENSORS,
    controllerId,
    response,
  };
}

getSensors.toString = () => GET_SENSORS;