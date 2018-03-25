let BaseRequest = require('src/api/requestSender/baseRequest');

export class UserSensorStatsRequest extends BaseRequest{
  execute(sensor_id) {
    if(!sensor_id || typeof sensor_id !== 'number')
      throw new TypeError('sensor_id undefiend or not a number');

    this._url = this._url.replace(/:\w+/,sensor_id);
    return this._prepareRequest();
  }
};