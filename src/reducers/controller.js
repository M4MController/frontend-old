/**
 * Created by YAX on 6/03/2018
 */

'use strict';

import * as controllerActions from '../actions/controller';

const initialState = {
  items: {},
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