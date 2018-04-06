import BaseRequest from 'src/api/requestSender/baseRequest';
import Controller from 'src/models/controller';

export default class extends BaseRequest {
  get model() {
    return Controller;
  }

  get isMultiple() {
    return true;
  }

  execute(objectId) {
    if (!objectId || typeof objectId !== 'number')
      throw new TypeError('objectId undefined or not a number');

    this._url = this._url.replace(':object_id', objectId);
    return this._prepareRequest();
  }
}
