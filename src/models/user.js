/**
 * Created by ed on 04/04/2018.
 */

'use strict';

import Model from './model';

export default class extends Model {
  get _proxyAttributes() {
    return {
      'name': 'name',
      'familyName': 'family_name',
      'secondName': 'second_name',
      'dateReceiving': 'date_receiving',
      'issuedBy': 'issued_by',
      'divisionNumber': 'division_number',
      'registrationAddress': 'registration_addres',
      'mailingAddress': 'mailing_addres',
      'birthday': 'birth_day',
      'sex': 'sex',
      'homePhone': 'home_phone',
      'mobilePhone': 'mobile_phone',
      'citizenship': 'citizenship',
      'email': 'e_mail',
    };
  }
}
