let AutorizationRequest = require('src/api/requestSender/userRequests/autorizationRequest');
let UserInfoRequest = require('src/api/requestSender/userRequests/userinfoRequest');
let UserControllersRequest = require('src/api/requestSender/controllerRequests/usercontrollersRequest');
let UserControllerSensorsRequest = require('src/api/requestSender/controllerRequests/usercontrollersensorsRequest');
let UserControllerStatsRequest = require('src/api/requestSender/controllerRequests/usercontrollerstatsRequest');
let UserSensorStatsRequest = require('src/api/requestSender/sensorRequest/usersensorstatsRequest');
let UserSensorDataRequest = require('src/api/requestSender/sensorRequest/usersensordataRequest');

export let defaultsettings = {
  httpprotocol: 'http',
  host: 'localhost:3000',
  requests : {
    autorization: {
      request: AutorizationRequest,
      url: '/user/sign_in',
      method: 'POST',
    },
    userinfo: {
      request: UserInfoRequest,
      url: '/user/user_info',
      method: 'GET',
    },
    usercontrollers: {
      request: UserControllersRequest,
      url: '/controller/get_user_controllers',
      method: 'GET',
    },
    usercontrollersensors: {
      request: UserControllerSensorsRequest,
      url: '/controller/:controller_id/get_sensors',
      method: 'GET',
    },
    usercontrollerstats: {
      request: UserControllerStatsRequest,
      url: '/controller/:controller_id/get_controller_stats',
      method: 'GET',
    },
    usersensorstats: {
      request: UserSensorStatsRequest,
      url: '/sensor/:sensor_id/view_stats',
      method: 'GET',
    },
    usersensordata: {
      request: UserSensorDataRequest,
      url: '/sensor/:sensor_id/get_data',
      method: 'GET',
    },
  },
};



export class RequestFabric{
  constructor(settings) {
    let self = this;
    this.settings = settings || defaultsettings;

    let requests = this.settings.requests;
    Object.keys(requests).forEach(key => {
      self[key] = () => {
        return self._withoutParamsRequest(key);
      };
    });
  }

  _withoutParamsRequest(name){
    let httpprot =  this.settings.httpprotocol;
    let host = this.settings.host;

    let request = new (this.settings[name].request)();
    request.url = `${httpprot}://${host}/${this.settings[name].url}`;
    request.method = this.settings[name].method;
    return request;
  }
}