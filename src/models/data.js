/**
 * Created by ed on 04/04/2018.
 */

'use strict';

import {Model, attr, fk} from 'redux-orm';
import dataReducer from 'src/reducers/data';

export default class extends Model {
  static get modelName() {
    return 'data';
  }

  static get fields() {
    return {
      sensor: fk('sensor', 'data'),
      date: attr(),
      hash: attr(),
      value: attr(),
    };
  }

  static get reducer() {
    return dataReducer;
  }

  static get options() {
    return {
      // todo: uncomment when data stub will be removed on the backend
      // idAttribute: 'hash',
    };
  }
}
