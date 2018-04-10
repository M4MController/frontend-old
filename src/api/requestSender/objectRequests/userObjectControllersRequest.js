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
    // return [
    //   {
    //     "id": 1,
    //     "name": "test_controller",
    //     "object_id": 1,
    //     "meta": "Улица Пушкина, Дом Колотушкина",
    //     "activation_date": "2001-01-01T00:00:00Z",
    //     "status": 1,
    //     "mac": "6b:45:cd:97:48:48",
    //     "deactivation_date": null,
    //     "controller_type": 1
    //   }
    // ];
    if (!objectId || typeof objectId !== 'number')
      throw new TypeError('objectId undefined or not a number');

    this._url = this._url.replace(':object_id', objectId);
    return this._prepareRequest();
  }
}
