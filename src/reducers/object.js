/**
 * Created by ed on 31/03/2018.
 */

'use strict';

import {createObject} from 'src/actions/object';

// redux-orm reducer
export default function({type, payload}, Object_) {
  switch (type) {
    case createObject.toString(): {
      Object_.upsert(payload);
      break;
    }
  }
}
