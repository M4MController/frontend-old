/**
 * Created by ed on 28/03/2018.
 */

'use strict';

export function changeLanguage(language) {
  return {
    type: changeLanguage.toString(),
    payload: {
      current: language,
    },
  };
}

changeLanguage.toString = () => 'CHANGE_LANGUAGE';
