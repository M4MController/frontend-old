/**
 * Created by ed on 19/05/2018.
 */

'use strict';

import {createSelector} from 'redux-orm';

import {ormSelector} from './orm';
import orm from 'src/models';

export const selectCurrentUser = createSelector(
  orm,
  ormSelector,
  session => (session.user.all().toRefArray() || [null])[0],
);
