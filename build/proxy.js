/**
 * Created by ed on 10/05/2018.
 */

'use strict';

const config = require('../config/proxy');

const express = require('express');
const proxy = require('express-http-proxy');

const app = express();

app.use(/\/(.*)/, proxy(`${config.proxy.schema}${config.proxy.host}`, {
  proxyReqPathResolver: req => req.baseUrl,
  userResHeaderDecorator: (headers, userReq) => Object.assign(headers, {
    'access-control-allow-credentials': 'true',
    'access-control-allow-origin': userReq.get('Origin'),
  }),
}));

app.listen(config.proxy.port);
