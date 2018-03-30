/**
 * Created by ed on 29/03/2018.
 */

'use strict';

import {takeEvery} from 'redux-saga/effects';
import * as languageActions from 'src/actionTypes/language';
import i18n from 'src/i18n';

const changeCurrent = function* ({payload}) {
  yield i18n(payload.current);
};

export default function* () {
  yield takeEvery(languageActions.CHANGE_CURRENT, changeCurrent);
}
