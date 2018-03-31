/**
 * Created by ed on 31/03/2018.
 */

'use strict';

import {FETCH} from 'src/actionTypes/object';

export function fetch() {
  return {
    type: FETCH,
    payload: {
      fetchStatus: 'fetching',
    },
  };
}
