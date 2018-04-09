import BaseRequest from 'src/api/requestSender/baseRequest';
import Controller from '../../../models/controller';

export default class UserControllersRequest extends BaseRequest {
  get model() {
    return Controller;
  }

  get isMultiple() {
    return true;
  }

}