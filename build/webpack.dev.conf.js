/**
 * Created by ed on 23/03/2018.
 */

'use strict';

const merge = require('webpack-merge');
const webpack = require('webpack');

const baseWebpackConfig = require('./webpack.base.conf');

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin({
      CONFIG: JSON.stringify(
        require(process.env['M4M_WEB_CONFIG'] || '../config/dev')),
    }),
  ],
  devServer: {
    publicPath: '/',
    disableHostCheck: true,
    host: '0.0.0.0',
    port: process.env['PORT'] || 8080,
  },
});
