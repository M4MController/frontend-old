/**
 * Created by ed on 18/04/2018.
 */

'use strict';

import {ORM} from 'redux-orm';

import Controller from './controller';
import ControllerStats from './controllerStats';
import Data from './data';
import Object from './object';
import Sensor from './sensor';
import User from './user';

const orm = new ORM();
orm.register(
  Controller,
  ControllerStats,
  Data,
  Object,
  Sensor,
  User,
);
export default orm;
