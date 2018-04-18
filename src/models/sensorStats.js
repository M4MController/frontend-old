/**
 * Created by ed on 04/04/2018.
 */

'use strict';

import {Model, attr, oneToOne} from 'redux-orm';
import sensorStatsReducer from 'src/reducers/sensorStats';

export default class extends Model {
  static get modelName() {
    return 'sensor_stats';
  }

  static get fields() {
    return {
      type: attr(),
      name: attr(),
      accural: attr(),
      over: attr(),
      result: attr(),
      currentMonth: attr(),
      prevYearMonth: attr(),
      prevYearAverage: attr(),
      sensor: oneToOne('sensor', 'stats'),
    };
  }

  static get options() {
    return {
      idAttribute: 'sensor',
    };
  }

  static get reducer() {
    return sensorStatsReducer;
  }
}
