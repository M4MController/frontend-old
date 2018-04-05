/**
 * Created by ed on 04/04/2018.
 */

'use strict';

export default class {
  constructor(data) {
    this._rawData = data;
    this.addProxyAttributes();
  }

  addProxyAttributes() {
    Object.keys(this._proxyAttributes).forEach(property => {
      Object.defineProperty(this, property, {
        enumerable: true,
        get: () => {
          return this._rawData[this._proxyAttributes[property]];
        },
      });
    });
  }

  get _proxyAttributes() {
    return {};
  }
}
