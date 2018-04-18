/**
 * Created by YAX on 6/03/2018
 */

'use strict';

import {createController} from 'src/actions/controller';

// redux-orm reducer
export default function({type, payload}, Controller) {
  switch (type) {
    case createController.toString(): {
      Controller.upsert(payload);
      break;
    }
  }
}
