import requestSender from 'src/api/requestSender/requestSender';

// todo: remove the stub
import api from '..';
const authorizeIfNeeded = async function() {
  if (authorizeIfNeeded.isAuthorized) return;
  await api.authorization().execute('ml@gmail.com', '123456');
  authorizeIfNeeded.isAuthorized = true;
};

export default class BaseRequest {
  constructor() {
  }

  get url() {
    return this._url;
  }

  set url(value) {
    if (!value || typeof value !== 'string')
      throw new TypeError('url undefined or not a string');
    this._url = value;
  }

  get method() {
    return this._method;
  }

  set method(value) {
    if (!value || typeof value !== 'string')
      throw new TypeError('method undefined or not a string');
    this._method = value;
  }

  /**
   * Model which is returned by the request. If null, execute() will return raw data without parsiong into model.
   * @return {Function}
   * @private
   */
  get model() {
    return null;
  }

  /**
   * If request receives array of records, it must be true;
   * If request receives a single record, it must be false;
   * @return {boolean}
   * @private
   */
  get isMultiple() {
    return false;
  }

  async _prepareRequest(params) {
    if (!this._url || !this._method) {
      throw new TypeError('url or method undefined');
    }

    const options = {
      url: this._url,
      method: this._method,
    };

    if (params) {
      if (typeof params === 'object') {
        Object.keys(params).forEach((key) => {
          options[key] = params[key];
        });
      } else {
        throw new TypeError('params not object');
      }
    }

    const response = await requestSender(options);
    const code = response['code'];
    const payload = response['msg'];

    if (code !== 0) {
      throw {
        code,
        error: payload,
      };
    }

    if (payload) {
      if (this.model) {
        return this.isMultiple ? payload.map(x => new this.model(x)) : new this.model(payload);
      } else {
        return payload;
      }
    }
    return true;
  }

  async execute() {
    await authorizeIfNeeded(); // todo: remove the stub
    return this._prepareRequest();
  }
}