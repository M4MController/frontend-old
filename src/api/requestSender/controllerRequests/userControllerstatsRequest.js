import BaseRequest from 'src/api/requestSender/baseRequest';
import ControllerStats from 'src/models/controllerStats';

export default class UserControllerStatsRequest extends BaseRequest {
  get model() {
    return ControllerStats;
  }

  execute(controller_id) {
    if (!controller_id || typeof controller_id !== 'number')
      throw new TypeError('controller_id undefined or not a number');

    this._url = this._url.replace(/:controller_id/, controller_id);
    return this._prepareRequest();
  }
}