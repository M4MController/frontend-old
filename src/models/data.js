/**
 * Created by ed on 04/04/2018.
 */

'use strict';

import Model from './model';

export default class extends Model {
  get _proxyAttributes() {
    return {
      'sensorId': 'sensor_id',
      'date': 'date',
      'hash': 'hash',
      'value': 'value',
    };
  }
}
