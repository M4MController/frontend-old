let BaseRequest = require('src/api/requestSender/baseRequest');

export class UserControllersRequest extends BaseRequest{
  execute() {
    return this._prepareRequest();
  }
};