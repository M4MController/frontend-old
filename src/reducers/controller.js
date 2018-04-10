/**
 * Created by YAX on 6/03/2018
 */

'use strict';

import * as controllerActions from '../actions/controller';

const initialState = {
  items: {1:[
      {
        "id": 1,
        "name": "test_controller",
        "objectId": 1,
        "meta": "Улица Пушкина, Дом Колотушкина",
        "activation_date": "2001-01-01T00:00:00Z",
        "status": 1,
        "mac": "6b:45:cd:97:48:48",
        "deactivation_date": null,
        "controller_type": 1
      }
    ]
  },
};

function updateControllers(state, action) {
  if (action.response === undefined)
    return state;

  let newState = {};
  Object.assign(newState, state);
  newState.items[action.objectId] = action.response;

  return newState;
}

export default function (state = initialState, action) {
  switch (action.type) {
    case controllerActions.fetchControllers.toString(): {
      return updateControllers(state, action);
    }
    default: {
      return state;
    }
  }
}