/**
 * Created by ed on 04/04/2018.
 */

'use strict';

import {Model, attr, fk} from 'redux-orm';
import objectReducer from 'src/reducers/object';

export default class extends Model {
  static get modelName() {
    return 'object';
  }

  static get fileds() {
    return {
      id: attr(),
      name: attr(),
      address: attr(),
      user: fk('user', 'objects'),
    };
  }

  static get reducer() {
    return objectReducer;
  }
}
