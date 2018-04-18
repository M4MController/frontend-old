/**
 * Created by ed on 24/04/2018
 */

'use strict';

import {createSensor} from 'src/actions/sensors';

// redux-orm reducer
export default function({type, payload}, Sensor) {
  switch (type) {
    case createSensor.toString(): {
      Sensor.upsert(payload);
      break;
    }
  }
}
