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
    if (!controller_id || typeof controller_id !== 'number')
      throw new TypeError('controller_id undefined or not a number');

    this._url = this._url.replace(/:controller_id/, controller_id);
    return this._prepareRequest();
  }
}