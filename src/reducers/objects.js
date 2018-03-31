/**
 * Created by ed on 31/03/2018.
 */

'use strict';

import * as objectTypes from 'src/actionTypes/object';

const initialState = {
  items: [],
  isFetching: false,
  fetchError: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case objectTypes.FETCH_BEGAN: {
      return {
        isFetching: true,
        fetchingError: null,
      };
    }
    case objectTypes.FETCH_SUCCEED: {
      return {
        isFetching: false,
        fetchingError: null,
        items: action.items,
      };
    }
    case objectTypes.FETCH_FAILED: {
      return {
        isFetching: false,
        fetchingError: action.error,
      };
    }
    default: {
      return state;
    }
  }
}
