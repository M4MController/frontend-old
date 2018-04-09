import BaseRequest from 'src/api/requestSender/baseRequest';
import Sensor from '../../../models/sensor';

export default class UserControllerSensorsRequest extends BaseRequest {
  get model() {
    return Sensor;
  }

  get isMultiple() {
    return true;
  }

  execute (controller_id) {
    return [{"id":1,"name":"test_sensor","controller_id":1,"activation_date":"2001-01-01T00:00:00Z","status":1,"deactivation_date":null,"SensorType":1,"Company":"GASPROM"}];
    if (!controller_id || typeof controller_id !== 'number')
      throw new TypeError('controller_id undefined or not a number');

    this._url = this._url.replace(/:controller_id/, controller_id);
    return this._prepareRequest();
  }
}