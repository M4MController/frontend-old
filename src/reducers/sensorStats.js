/**
 * Created by ed on 24/04/2018
 */

'use strict';

import {createSensorStats} from 'src/actions/sensors';

// redux-orm reducer
export default function({type, payload}, SensorStats) {
  switch (type) {
    case createSensorStats.toString(): {
      SensorStats.upsert(payload);
      break;
    }
  }
}
