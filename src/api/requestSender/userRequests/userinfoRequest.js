import BaseRequest from 'src/api/requestSender/baseRequest';

export  default class UserInfoRequest extends BaseRequest{
  execute() {
    return this._prepareRequest();
  }
}