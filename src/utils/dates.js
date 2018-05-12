/**
 * Created by ed on 23/04/2018.
 */

'use strict';

export const getCurrentMonth = function() {
  const now = new Date();
  now.setDate(now.getMonth() - 1);
  return now;
};
