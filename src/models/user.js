/**
 * Created by ed on 04/04/2018.
 */

'use strict';

import {Model, attr} from 'redux-orm';

export default class extends Model {
  static get modelName() {
    return 'user';
  }

  static get fields() {
    return {
      id: attr(),
      familyName: attr(),
      secondName: attr(),
      dateReceiving: attr(),
      issuedBy: attr(),
      divisionNumber: attr(),
      registrationAddress: attr(),
      mailingAddress: attr(),
      birthday: attr(),
      sex: attr(),
      homePhone: attr(),
      mobilePhone: attr(),
      citizenship: attr(),
      email: attr(),
    };
  }
}
