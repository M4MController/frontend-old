/**
 * Created by ed on 16/05/2018.
 */

'use strict';

import {setAuthState} from 'src/actions/auth';

const initialState = {
  isAuthorized: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case setAuthState.toString(): {
      return {isAuthorized: action.state};
    }
    default: {
      return state;
    }
  }
}
