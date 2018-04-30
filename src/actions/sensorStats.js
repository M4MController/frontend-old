/**
 * Created by ed on 24/04/2018.
 */

'use strict';

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
