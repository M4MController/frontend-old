let instance;
let settings, RequestFabric = require('src/api/requestSender/requestFabric');

//  set host:
// let settings.host = <host>

//  set protocol:
// let settings.http = 'http' || 'https'


module.export = class Api{
  constructor() {
    if(instance)
      return instance;

    this._requestFabric = new RequestFabric(settings);
    let self = this;
    Object.keys(settings.requests).forEach(key => {
      self[key] = self._requestFabric[key];
    });
    instance = this;
  }
};