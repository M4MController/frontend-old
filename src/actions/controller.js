/**
 * Created by YAX on 6/03/2018
 */

'use strict';

import {FETCH_CONTROLLERS} from '../actionTypes/controller';

export function fetchControllers(objectId){
    return {
        type: FETCH_CONTROLLERS,
        objectId,
        response
    }
}

fetchControllers.toString = () => FETCH_CONTROLLERS;