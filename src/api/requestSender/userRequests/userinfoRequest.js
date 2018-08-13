import BaseRequest from 'src/api/requestSender/baseRequest';

export default class UserInfoRequest extends BaseRequest {
  get _recordProxyAttributes() {
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

  async execute() {
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

  get isMultiple() {
    return false;
  }
}