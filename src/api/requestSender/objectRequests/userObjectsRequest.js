import BaseRequest from 'src/api/requestSender/baseRequest';
import Object from 'src/models/object';

export default class extends BaseRequest {
  get model() {
    return Object;
  }

  get isMultiple() {
    return true;
  }

 async execute() {
    return [
        {
          "id": 1,
          "name": "Имя Объекта",
          "user_id": 1,
          "adres": "Улица Пушкина, Дом Колотушкина"
        }
      ]
  }
}
