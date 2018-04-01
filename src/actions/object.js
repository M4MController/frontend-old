/**
 * Created by ed on 31/03/2018.
 */

'use strict';

import {UPDATE_ALL} from 'src/actionTypes/object';

export function updateAll(items) {
  return {
    type: UPDATE_ALL,
    items,
  };
}
updateAll.toString = () => UPDATE_ALL;
