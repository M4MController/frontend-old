/**
 * Created by ed on 23/04/2018.
 */

'use strict';

export const getCurrentDate = function() {
  const now = new Date();
  now.setDate(now.getDate() - 1);
  return now;
};
