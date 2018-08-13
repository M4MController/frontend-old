import BaseRequest from 'src/api/requestSender/baseRequest';

export default class extends BaseRequest {
  _recordParse(rawRecord) {
    const record = super._recordParse(rawRecord);
    record.activationDate = new Date(rawRecord['activation_date']);
    record.deactivationDate = new Date(rawRecord['deactivation_date']);
    return record;
  }

  get _recordProxyAttributes() {
    return {
      'id': 1,
      'name': 'name',
      'status': 'status',
      'mac': 'mac',
      'meta': 'meta',
      'object': 1, // one-to-many relation field
    };
  }

  get isMultiple() {
    return true;
  }

  async execute() {
    return [{
      'id': 1,
      'name': 'name',
      'status': 'status',
      'mac': 'mac',
      'meta': 'meta',
      'object': 1, // one-to-many relation field
    }];
  }
}
