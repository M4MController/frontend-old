import BaseRequest from 'src/api/requestSender/baseRequest';

export default class UserSensorStatsRequest extends BaseRequest {
  _recordParse(rawRecord) {
    const result = super._recordParse(rawRecord);
    result.currentMonth = rawRecord['stats']['current_month'];
    result.prevYearMonth = rawRecord['stats']['prev_year_month'];
    result.prevYearAverage = rawRecord['stats']['prev_year_average'];
    return result;
  }

  get _recordProxyAttributes() {
    return {
      'controller': 1, // one-to-many relation field
      'month': 'month',
      'prevMonth': 'prev_month',
      'prevYear': 'prev_year',
    };
  }

  execute(sensor_id) {
    return {
      'controller': 1, // one-to-many relation field
      'month': 'month',
      'prevMonth': 'prev_month',
      'prevYear': 'prev_year',
    };

    if (!sensor_id || typeof sensor_id !== 'number')
      throw new TypeError('sensor_id undefined or not a number');

    this._url = this._url.replace(/:sensor_id/, sensor_id);
    return this._prepareRequest();
  }
}