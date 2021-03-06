/**
 * Created by ed on 19/04/2018.
 */

'use strict';

export function fetchSensors(controllerId) {
  return {
    type: fetchSensors.toString(),
    controllerId,
  };
}

fetchSensors.toString = () => 'FETCH_SENSORS';

export function createSensor(payload) {
  return {
    type: createSensor.toString(),
    payload,
  };
}

createSensor.toString = () => 'CREATE_SENSOR';

export function createSensorStats(payload) {
  return {
    type: createSensorStats.toString(),
    payload,
  };
}

createSensorStats.toString = () => 'CREATE_SENSOR_STATS';

export function fetchSensorStats(sensorId) {
  return {
    type: fetchSensorStats.toString(),
    sensorId,
  };
}

fetchSensorStats.toString = () => 'FETCH_SENSOR_STATS';
