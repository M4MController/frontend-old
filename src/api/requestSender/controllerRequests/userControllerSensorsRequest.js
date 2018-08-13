import BaseRequest from 'src/api/requestSender/baseRequest';

export default class UserControllerSensorsRequest extends BaseRequest {
  get _recordProxyAttributes() {
    return {
      'id': 1,
      'name': 'name',
      'status': 'status',
      'company': 'company',
      'controller': 1, //one-to-many relation field
    };
  }

  get isMultiple() {
    return true;
  }

  async execute() {
    return [{
      'id': 1,
      'name': 'name',
      'status': 'status',
      'company': 'company',
      'controller': 1, //one-to-many relation field
    }];
  }

  execute (controller_id) {
    if (!controller_id || typeof controller_id !== 'number')
      throw new TypeError('controller_id undefined or not a number');

    this._url = this._url.replace(/:controller_id/, controller_id);
    return this._prepareRequest();
  }
}