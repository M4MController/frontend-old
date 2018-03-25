
import requestSender from 'src/api/requestSender/requestSender';
export default class BaseRequest{
  constructor() {
  }

  get url() {
    return this._url;
  }

  set url(value) {
    if(!value || typeof value !== 'string')
      throw new TypeError('url undefined or not a string');
    this._url = value;
  }

  get method() {
    return this._method;
  }

  set method(value) {
    if(!value || typeof value !== 'string')
      throw new TypeError('method undefined or not a string');
    this._method = value;
  }

  _prepareRequest(params){
    if(!this._url || !this._method){
      throw new TypeError('url or method undefined');
    }

    let options = {
      url: this._url,
      method: this._method,
    };

    if(params){
      if(typeof params === 'object'){
        Object.keys(params).forEach((key) => {
          options[key] = params[key];
        });
      } else {
        throw new TypeError('params not object');
      }
    }

    return requestSender(options);
  }
}