import BaseRequest from 'src/api/requestSender/baseRequest';
import Data from 'src/models/data';

export default class UserSensorDataRequest extends BaseRequest {
  get model() {
    return Data;
  }

  execute(sensor_id, date, limit) {
    if (!sensor_id || typeof sensor_id !== 'number')
      throw new TypeError('sensor_id undefined or not a number');

    if (!date || typeof date !== 'string')
      throw new TypeError('date undefined or not a string');

    if (!limit || typeof limit !== 'number')
      throw new TypeError('limit undefined or not a number');

    this._url = this._url.replace(/:sensor_id/, sensor_id);
    return this._prepareRequest({
      params: {
        date, limit,
      },
    });
  }
}