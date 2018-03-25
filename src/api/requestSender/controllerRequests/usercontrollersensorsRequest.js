let BaseRequest = require('src/api/requestSender/baseRequest');

export class UserControllerSensorsRequest extends BaseRequest{
  execute(controller_id) {
    if(!controller_id || typeof controller_id !== 'number')
      throw new TypeError('controller_id undefiend or not a number');

    this._url = this._url.replace(/:\w+/,controller_id);
    return this._prepareRequest();
  }
};