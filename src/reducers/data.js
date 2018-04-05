/**
 * Created by ed on 04/04/2018.
 */

'use strict';

import * as dataActions from 'src/actions/data';

/**
 * @type {{items: {[sensorId]: Array[Sensor]}}}
 */
const initialState = {
  items: {},
};

const updateSensor = function(state, action) {
  if (!action.items) return state;

  const filter = data => data.sensorId === action.sensorId && data.date >= action.date;
  return {
    items: {
      ...state.items,
      [action.sensorId]: [
        ...(state.items[action.sensorId] || []).filter(x => !filter(x)),
        ...action.items.filter(filter),
      ],
    },
  };
};

export default function(state = initialState, action) {
  switch (action.type) {
    case dataActions.updateSensor.toString(): {
      return updateSensor(state, action);
    }
    default: {
      return state;
    }
  }
}
