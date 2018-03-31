/**
 * Created by ed on 31/03/2018.
 */

'use strict';

// actions received by saga only
export const FETCH = 'OBJECT_FETCH_REQUESTED';

// actions should be dispatched from saga only
export const FETCH_BEGAN = 'OBJECTS_FETCH_BEGAN';
export const FETCH_SUCCEED = 'OBJECTS_FETCH_SUCCEED';
export const FETCH_FAILED = 'OBJECTS_FETCH_FAILED';
