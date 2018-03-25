let BaseRequest = require('src/api/requestSender/baseRequest');

export class UserInfoRequest extends BaseRequest{
  execute() {
    return this._prepareRequest();
  }
};