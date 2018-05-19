/**
 * Created by ed on 16/05/2018.
 */

'use strict';

export function createUser(payload) {
  return {
    type: createUser.toString(),
    payload,
  };
}

createUser.toString = () => 'CREATE_USER';

export function fetchUserInfo() {
  return {
    type: fetchUserInfo.toString(),
  };
}

fetchUserInfo.toString = () => 'FETCH_USER_INFO';
