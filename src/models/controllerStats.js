/**
 * Created by ed on 04/04/2018.
 */

'use strict';

import {Model, attr, oneToOne} from 'redux-orm';

export default class extends Model {
  static get modelName() {
    return 'controller_stats';
  }

  static get fields() {
    return {
      month: attr(),
      prevMonth: attr(),
      prevYear: attr(),
      controller: oneToOne('controller', 'stats'),
    };
  }
}
