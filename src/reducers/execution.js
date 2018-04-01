/**
 * Created by ed on 01/04/2018.
 */

'use strict';

import * as executionTypes from 'src/actionTypes/execution';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case executionTypes.START: {
      return {
        ...initialState,
        [action.actionName]: {
          running: true,
          error: null,
        },
      };
    }
    case executionTypes.DONE: {
      return {
        ...initialState,
        [action.actionName]: {
          running: false,
          error: null,
        },
      };
    }
    case executionTypes.FAILED: {
      return {
        ...initialState,
        [action.actionName]: {
          running: false,
          error: action.error,
        },
      };
    }
    default: {
      return state;
    }
  }
}