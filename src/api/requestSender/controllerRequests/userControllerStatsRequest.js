import BaseRequest from 'src/api/requestSender/baseRequest';

export default class UserControllerStatsRequest extends BaseRequest {
  _recordProxyAttributes() {
    return {
      'controller': 1, // one-to-many relation field
      'month': 'month',
      'prevMonth': 'prev_month',
      'prevYear': 'prev_year',
    };
  }

  async execute(controller_id) {
    return {
      'controller': 1, // one-to-many relation field
      'month': 'month',
      'prevMonth': 'prev_month',
      'prevYear': 'prev_year',
    };

    if (!controller_id || typeof controller_id !== 'number')
      throw new TypeError('controller_id undefined or not a number');

    this._url = this._url.replace(/:controller_id/, controller_id);
    return this._prepareRequest();
  }
}