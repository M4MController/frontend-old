/**
 * Created by ed on 04/04/2018.
 */

'use strict';

import Model from './model';

export default class extends Model {
  get _proxyAttributes() {
    return {
      'type': 'type',
      'name': 'name',
      'status': 'status',
      'accural': 'accural',
      'over': 'over',
      'result': 'result',
    };
  }

  /**
   * Sum of the current month
   * @return {Number}
   */
  get currentMonth() {
    return this._rawData['stats']['current_month'];
  }

  /**
   * Sum of the same month of the previous year
   * @return {Number}
   */
  get prevYearMonth() {
    return this._rawData['stats']['prev_year_month'];
  }

  /**
   * Average cost of the previous year
   * @return {Number}
   */
  get prevYearAverage() {
    return this._rawData['stats']['prev_year_average'];
  }
}
