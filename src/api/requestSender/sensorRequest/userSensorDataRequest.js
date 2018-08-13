import BaseRequest from 'src/api/requestSender/baseRequest';
import {getCurrentMonth} from 'src/utils/dates';

export default class UserSensorDataRequest extends BaseRequest {
  get _recordProxyAttributes() {
    return {
      'sensor': 'sensor_id', // one-to-many relation field
      'date': 'date',
      'hash': 'hash',
      'value': 'value',
    };
  }

  get isMultiple() {
    return true;
  }

  async execute() {
    return [{
      'sensor': 1, // one-to-many relation field
      'date': 'date',
      'hash': 'hash',
      'value': 'value',
    }];
  }
}