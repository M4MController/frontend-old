/**
 * Created by ed on 19/04/2018.
 */

'use strict';

import {createSelector} from 'redux-orm';

import {ormSelector} from './orm';
import orm from 'src/models';

export const selectCardObjects = createSelector(
  orm,
  ormSelector,
  session => session.object.all().toModelArray().map(object => Object.assign({}, object.ref, {
    controllers: object.controllers.toModelArray().map(controller => Object.assign({}, controller.ref, {
      sensors: controller.sensors.toModelArray().map(sensor => Object.assign({}, sensor.ref, {
        data: sensor.data.toModelArray().map(data => Object.assign({}, data.ref)),
      })),
    })),
  })),
);
