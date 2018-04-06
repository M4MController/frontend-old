/**
 * Created by ed on 04/04/2018.
 */

'use strict';

import Model from './model';

export default class extends Model {
  get _proxyAttributes() {
    return {
      'id': 'id',
      'name': 'name',
      'status': 'status',
      'company': 'company',
      'controllerId': 'controller_id',
    };
  }

  /**
   * Date when sensor was activated
   * @return {Date}
   */
  get activationDate() {
    return new Date(this._rawData['activation_date']);
  }

  /**
   * Date when sensor was deactivated
   * @return {Date}
   */
  get deactivationDate() {
    return new Date(this._rawData['deactivation_date']);
  }
}