/**
 * Created by ed on 01/04/2018.
 */

'use strict';

import {start, done, fail} from 'src/actions/execution';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case start.toString(): {
      return {
        ...initialState,
        [action.actionName]: {
          running: true,
          error: null,
        },
      };
    }
    case done.toString(): {
      return {
        ...initialState,
        [action.actionName]: {
          running: false,
          error: null,
        },
      };
    }
    case fail.toString(): {
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