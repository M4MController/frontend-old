import BaseRequest from 'src/api/requestSender/baseRequest';

export default class AuthorizationRequest extends BaseRequest {
  execute (e_mail, password) {
    return {};

    if (!e_mail && typeof e_mail !== 'string') {
      throw new TypeError('e_mail undefined or not a string');
    }
    if (!password && typeof password !== 'string') {
      throw new TypeError('password undefined or not a string');
    }

    return this._prepareRequest({
      data: {
        e_mail,
        password,
      },
    });
  }
}