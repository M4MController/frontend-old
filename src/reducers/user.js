/**
 * Created by ed on 19/05/2018
 */

'use strict';

import {createUser} from 'src/actions/user';

// redux-orm reducer
export default function({type, payload}, User) {
  switch (type) {
    case createUser.toString(): {
      User.upsert(payload);
      break;
    }
  }
}
