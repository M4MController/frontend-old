/**
 * Created by ed on 23/04/2018.
 */

'use strict';

export const getCurrentMonth = function() {
  const now = Date.now();
  return now.setMonth(now.getMonth() - 1);
};
