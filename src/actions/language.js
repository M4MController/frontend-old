/**
 * Created by ed on 28/03/2018.
 */

'use strict';

import {CHANGE_CURRENT} from 'src/actionTypes/language';

export function changeLanguage(language) {
  return {
    type: CHANGE_CURRENT,
    payload: {
      current: language,
    },
  };
}