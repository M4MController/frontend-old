import AuthorizationRequest from 'src/api/requestSender/userRequests/authorizationRequest';
import UserInfoRequest from 'src/api/requestSender/userRequests/userinfoRequest';
import UserControllersRequest from 'src/api/requestSender/controllerRequests/usercontrollersRequest';
import UserControllerSensorsRequest from 'src/api/requestSender/controllerRequests/usercontrollersensorsRequest';
import UserControllerStatsRequest from 'src/api/requestSender/controllerRequests/usercontrollerstatsRequest';
import UserSensorStatsRequest from 'src/api/requestSender/sensorRequest/usersensorstatsRequest';
import UserSensorDataRequest from 'src/api/requestSender/sensorRequest/usersensordataRequest';

export let defaultsettings = {
  httpprotocol: 'http',
  host: 'localhost:3000',
  requests : {
    authorization: {
      request: AuthorizationRequest,
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
    let request = new (this.settings.requests[name].request)();
    request.url = `${httpprot}://${host}${this.settings.requests[name].url}`;
    request.method = this.settings.requests[name].method;
    return request;
  }
}