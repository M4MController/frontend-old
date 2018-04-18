/**
 * Created by ed on 29/03/2018.
 */

'use strict';

import {takeEvery} from 'redux-saga/effects';
import {changeLanguage} from 'src/actions/language';
import i18n from 'src/i18n';

const changeCurrent = function* ({payload}) {
  yield i18n(payload.current);
};

export default function* () {
  yield takeEvery(changeLanguage, changeCurrent);
}
