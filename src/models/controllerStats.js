/**
 * Created by ed on 04/04/2018.
 */

'use strict';

import Model from './model';

export default class extends Model {
  get _proxyAttributes() {
    return {
      'controllerId': 'controller_id',
      'month': 'month',
      'prevMonth': 'prev_month',
      'prevYear': 'prev_year',
    };
  }
}
