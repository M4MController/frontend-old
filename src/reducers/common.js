/**
 * Created by ed on 28/03/2018.
 */

'use strict';

import {changeCurrentObject} from 'src/actions/common';

const initialState = {
  currentObjectId: 0,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case changeCurrentObject.toString(): {
      return {currentObjectId: action.objectId};
    }
    default: {
      return state;
    }
  }
}
