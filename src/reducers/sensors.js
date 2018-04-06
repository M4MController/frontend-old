import * as sensorsActions from '../actions/sensors';

const initialState = {
  items: [],
};

function updateData (state, action) {
  if (!action.response) return state;
  const filter = data => data.controllerId === action.controllerId;
  return {
    items: {
      [action.controllerId]: action.response.filter(filter),
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