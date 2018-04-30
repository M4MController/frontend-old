import BaseRequest from 'src/api/requestSender/baseRequest';

export default class extends BaseRequest {
  get _recordProxyAttributes() {
    return {
      'id': 'id',
      'name': 'name',
      'user': 'user_id', // one-to-many relation field
      'address': 'adres',
    };
  }

  get isMultiple() {
    return true;
  }
}
