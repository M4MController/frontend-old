let instance;
import {defaultsettings, RequestFabric} from 'src/api/requestSender/requestFabric';
let settings = defaultsettings;

//  set host:
// let settings.host = <host>

//  set protocol:
// let settings.http = 'http' || 'https'
class Api{
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
}

export default new Api();