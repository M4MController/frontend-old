/**
 * Created by ed on 16/05/2018.
 */

'use strict';

export function setAuthState(state) {
  return {
    type: setAuthState.toString(),
    state,
  };
}

setAuthState.toString = () => 'SET_AUTH_STATE';

export function authorization(login, password) {
  return {
    type: authorization.toString(),
    login,
    password,
  };
}

authorization.toString = () => 'AUTH';
