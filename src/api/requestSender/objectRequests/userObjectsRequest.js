import BaseRequest from 'src/api/requestSender/baseRequest';

export default class extends BaseRequest {
  get _recordProxyAttributes() {
    return {
      'id': 1,
      'name': 'name',
      'user': 1, // one-to-many relation field
      'address': 'adres',
    };
  }

  async execute() {
    return [{
      'id': 1,
      'name': 'name',
      'user': 1, // one-to-many relation field
      'address': 'adres',
    }];
  }

  get isMultiple() {
    return true;
  }
}
