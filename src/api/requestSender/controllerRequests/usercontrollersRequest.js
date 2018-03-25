import BaseRequest from 'src/api/requestSender/baseRequest';

export default class UserControllersRequest extends BaseRequest {
  execute () {
    return this._prepareRequest();
  }
}