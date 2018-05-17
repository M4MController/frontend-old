/**
 * Created by ed on 04/04/2018.
 */

'use strict';

import {getCurrentDate} from 'src/utils/dates';

export function fetchData(sensorId, date = getCurrentDate(), limit = 1000) {
  return {
    type: fetchData.toString(),
    sensorId,
    date,
    limit,
  };
}

fetchData.toString = () => 'FETCH_DATA';

export function createData(payload) {
  return {
    type: createData.toString(),
    payload,
  };
}

createData.toString = () => 'CRATE_DATA';
