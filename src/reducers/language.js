/**
 * Created by ed on 28/03/2018.
 */

'use strict';

import {changeLanguage} from 'src/actions/language';

const initialState = {
  current: 'en',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case changeLanguage.toString(): {
      return {current: action.payload.current};
    }
    default: {
      return state;
    }
  }
}
