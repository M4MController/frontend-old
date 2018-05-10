/**
 * Created by ed on 25/04/2018.
 */

'use strict';

import {createSelector as createSelectorOrm} from 'redux-orm';
import {createSelector} from 'reselect';

import {ormSelector} from './orm';
import orm from 'src/models';

export const selectSensorsWithStats = createSelectorOrm(
  orm,
  ormSelector,
  session => session.sensor.all().toModelArray().map(sensor => Object.assign({}, sensor.ref, {
    stats: sensor.stats && sensor.stats.ref,
    objectId: session.controller.withId(sensor.controller.id).object.id,
  })),
);

export const selectCardSensors = createSelector(
  state => ({
    sensors: selectSensorsWithStats(state),
    objectId: state.common.currentObjectId,
  }),
  ({sensors, objectId}) => sensors.filter(sensor => sensor.objectId == objectId),
);
