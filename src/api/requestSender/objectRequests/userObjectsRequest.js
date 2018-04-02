import BaseRequest from 'src/api/requestSender/baseRequest';

export default class extends BaseRequest {
  execute() {
    return this._prepareRequest();
  }
}
