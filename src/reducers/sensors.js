import * as sensorsActions from '../actions/sensors';

const initialState = {
  items: {1:[
      {
        "id": 1,
        "name": "test_sensor",
        "controller_id": 1,
        "activation_date": "2001-01-01T00:00:00Z",
        "status": 1,
        "deactivation_date": null,
        "SensorType": 1,
        "Company": "GASPROM"
      }
    ]},
};

function updateData (state, action) {
  if (!action.response) return state;
  let newState = {};
  Object.assign(newState,state);
  newState.items[action.controllerId] = action.response;
  return newState;
}

export default function (state = initialState, action) {
  switch (action.type) {
    case sensorsActions.getSensors: {
      return updateData(state, action);
    }
    default: {
      return state;
    }
  }
}