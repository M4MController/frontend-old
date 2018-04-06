import * as sensorsActions from '../actions/sensors';

const initialState = {
  items: [],
};

function updateData (state, action) {
  if (!action.response) return state;
  const filter = data => data.controllerId === action.controller_id;
  return {
    items: {
      [action.controller_id]: action.response.filter(filter),
    },
  };
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