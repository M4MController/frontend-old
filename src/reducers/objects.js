/**
 * Created by ed on 31/03/2018.
 */

'use strict';

import * as objectActions from 'src/actions/object';

const initialState = {
  items: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case objectActions.updateAll.toString(): {
      return {
        items: action.items,
      };
    }
    default: {
      return state;
    }
  }
}
