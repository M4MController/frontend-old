/**
 * Created by ed on 10/05/2018.
 */

'use strict';

const base = require('./base');

const port = 5000;

module.exports = {
  proxy: Object.assign(base.backend, {
    port: port,
  }),
  backend: {
    schema: 'http://',
    host: `localhost:${port}`,
  },
};
