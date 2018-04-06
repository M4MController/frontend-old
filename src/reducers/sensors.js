import * as sensorsActions from '../actions/sensors';

const initialState = {
  items: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case sensorsActions.getSensors: {
      return {
        items: action.items,
      };
    }
    default: {
      return state;
    }
  }
}