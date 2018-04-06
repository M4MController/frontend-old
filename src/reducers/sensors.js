import * as sensorsActions from '../actions/sensors';

const initialState = {
  items: {},
};

function updateData (state, action) {
  if (!action.response) return state;
  let newState = {};
  Object.assign(newState,state);
  newState.items[action.response.controlerId] = action.response;
  return newState;
}

export default function (state = initialState, action) {
  switch (action.type) {
    case sensorsActions.getSensors: {
      return updateData(state,action);
    }
    default: {
      return state;
    }
  }
}