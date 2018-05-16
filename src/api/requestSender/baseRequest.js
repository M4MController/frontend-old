import requestSender from 'src/api/requestSender/requestSender';

// todo: remove the stub
import api from '..';
const authorizeIfNeeded = async function() {
  if (authorizeIfNeeded.isAuthorized) return;
  await api.authorization().execute('ml@gmail.com', '123456');
  authorizeIfNeeded.isAuthorized = true;
};

export default class BaseRequest {
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
   * Function translates incoming raw record to data understanding by models.
   * @return {Object}
   * @protected
   */
  _recordParse(rawRecord) {
    const proxyAttributes = this._recordProxyAttributes;
    if (proxyAttributes) {
      const result = {};
      Object.keys(proxyAttributes).forEach(key => {
        result[key] = rawRecord[proxyAttributes[key]];
      });
      return result;
    }
    return rawRecord;
  }

  /**
   * Helper for model parsing
   * @return {Object}
   * @private
   */
  get _recordProxyAttributes() {
    return {};
  }

  /**
   * If request receives array of records, it must be true;
   * If request receives a single record, it must be false;
   * @return {boolean}
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
      return this.isMultiple ? payload.map(x => this._recordParse(x)) : this._recordParse(payload);
    } else {
      return this.isMultiple ? [] : null;
    }
  }

  async execute() {
    return this._prepareRequest();
  }
}