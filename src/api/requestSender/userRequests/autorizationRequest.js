import BaseRequest from 'src/api/requestSender/baseRequest';
export default class AutorizationRequest extends BaseRequest{
  constructor() {
    super();
  }

  execute(e_mail, password) {
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