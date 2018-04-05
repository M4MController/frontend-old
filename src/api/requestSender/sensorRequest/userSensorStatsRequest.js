import BaseRequest from 'src/api/requestSender/baseRequest';
import SensorStats from 'src/models/sensorStats';

export default class UserSensorStatsRequest extends BaseRequest {
  get model() {
    return SensorStats;
  }

  execute(sensor_id) {
    if (!sensor_id || typeof sensor_id !== 'number')
      throw new TypeError('sensor_id undefined or not a number');

    this._url = this._url.replace(/:\w+/, sensor_id);
    return this._prepareRequest();
  }
}