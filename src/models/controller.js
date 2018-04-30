/**
 * Created by ed on 04/04/2018.
 */

'use strict';

import {Model, attr, fk} from 'redux-orm';
import controllerReducer from 'src/reducers/controller';

export default class extends Model {
  static get modelName() {
    return 'controller';
  }

  static get fields() {
    return {
      id: attr(),
      name: attr(),
      status: attr(),
      max: attr(),
      meta: attr(),
      object: fk('object', 'controllers'),
    };
  }

  static get reducer() {
    return controllerReducer;
  }
}
