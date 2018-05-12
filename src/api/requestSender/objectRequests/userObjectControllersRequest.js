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
      'id': 'id',
      'name': 'name',
      'status': 'status',
      'mac': 'mac',
      'meta': 'meta',
      'object': 'object_id', // one-to-many relation field
    };
  }

  get isMultiple() {
    return true;
  }

  execute(objectId) {
    this._url = this._url.replace(':object_id', objectId);
    return this._prepareRequest();
  }
}
