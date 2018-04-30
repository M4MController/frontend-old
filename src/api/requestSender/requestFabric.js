import AuthorizationRequest from 'src/api/requestSender/userRequests/authorizationRequest';
import UserInfoRequest from 'src/api/requestSender/userRequests/userinfoRequest';
import UserObjectsRequest from 'src/api/requestSender/objectRequests/userObjectsRequest';
import UserObjectControllersRequest from 'src/api/requestSender/objectRequests/userObjectControllersRequest';
import UserControllerSensorsRequest from 'src/api/requestSender/controllerRequests/userControllerSensorsRequest';
import UserControllerStatsRequest from 'src/api/requestSender/controllerRequests/userControllerStatsRequest';
import UserSensorStatsRequest from 'src/api/requestSender/sensorRequest/userSensorStatsRequest';
import UserSensorDataRequest from 'src/api/requestSender/sensorRequest/userSensorDataRequest';

const backendConfig = CONFIG['backend'];

export let defaultsettings = {
  httpprotocol: backendConfig['schema'],
  host: backendConfig['host'],
  requests: {
    authorization: {
      request: AuthorizationRequest,
      url: '/user/sign_in',
      method: 'POST',
    },
    userInfo: {
      request: UserInfoRequest,
      url: '/user/user_info',
      method: 'GET',
    },
    userObjects: {
      request: UserObjectsRequest,
      url: '/object/get_user_objects',
      method: 'GET',
    },
    userObjectControllers: {
      request: UserObjectControllersRequest,
      url: '/object/:object_id/get_controllers',
      method: 'GET',
    },
    userControllerSensors: {
      request: UserControllerSensorsRequest,
      url: '/controller/:controller_id/get_sensors',
      method: 'GET',
    },
    userControllerStats: {
      request: UserControllerStatsRequest,
      url: '/controller/:controller_id/get_controller_stats',
      method: 'GET',
    },
    userSensorStats: {
      request: UserSensorStatsRequest,
      url: '/sensor/:sensor_id/view_stats',
      method: 'GET',
    },
    userSensorData: {
      request: UserSensorDataRequest,
      url: '/sensor/:sensor_id/get_data',
      method: 'GET',
    },
  },
};

export class RequestFabric {
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

  _withoutParamsRequest(name) {
    let httpprot = this.settings.httpprotocol;
    let host = this.settings.host;
    let request = new (this.settings.requests[name].request)();
    request.url = `${httpprot}://${host}${this.settings.requests[name].url}`;
    request.method = this.settings.requests[name].method;
    return request;
  }
}