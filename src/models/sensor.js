/**
 * Created by ed on 04/04/2018.
 */

'use strict';

import {Model, attr, fk} from 'redux-orm';
import sensorReducer from 'src/reducers/sensor';

export default class extends Model {
  static get modelName() {
    return 'sensor';
  }

  static get fields() {
    return {
      id: attr(),
      name: attr(),
      status: attr(),
      company: attr(),
      activationDate: attr(),
      deactivationDate: attr(),
      controller: fk('controller', 'sensors'),
    };
  }

  static get reducer() {
    return sensorReducer;
  }
}
