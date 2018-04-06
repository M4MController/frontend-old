import BaseRequest from 'src/api/requestSender/baseRequest';
import Object from 'src/models/object';

export default class extends BaseRequest {
  get model() {
    return Object;
  }

  get isMultiple() {
    return true;
  }
}
