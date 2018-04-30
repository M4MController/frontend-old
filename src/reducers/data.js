/**
 * Created by ed on 24/04/2018
 */

'use strict';

import {createData} from 'src/actions/data';

// redux-orm reducer
export default function({type, payload}, Data) {
  switch (type) {
    case createData.toString(): {
      Data.create(payload);
      break;
    }
  }
}
