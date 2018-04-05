/**
 * Created by ed on 04/04/2018.
 */

'use strict';

import {UPDATE_SENSOR_DATA} from 'src/actionTypes/data';

export function updateSensor({sensorId, date, limit}, items) {
  return {
    type: UPDATE_SENSOR_DATA,
    sensorId,
    date,
    limit,
    items,
  };
}
updateSensor.toString = () => UPDATE_SENSOR_DATA;
