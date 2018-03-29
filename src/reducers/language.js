/**
 * Created by ed on 28/03/2018.
 */

'use strict';

import * as languageTypes from 'src/actionTypes/language';

const initialState = {
  current: 'en',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case languageTypes.CHANGE_CURRENT: {
      return {current: action.payload.current};
    }
    default: {
      return state;
    }
  }
}
