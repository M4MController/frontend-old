/**
 * Created by ed on 18/03/2018.
 */

'use strict';

const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
  {
    entry: ['./src/index.js'],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components|dist|public)/,
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
          },
        },
        {
          test: /\.(css|scss)$/,
          use: [{
            loader: 'style-loader',
          }, {
            loader: 'css-loader',
          }, {
            loader: 'sass-loader',
          }],
        },
      ],
    },
    resolve: {
      modules: ['node_modules', '.'],
      extensions: ['.js', '.jsx'],
    },
    devServer: {
      contentBase: [path.join(__dirname, 'public'), path.join(__dirname, 'dist')],
      publicPath: '/',
      hot: true,
      disableHostCheck: true,
      host: '0.0.0.0',
      port: process.env['PORT'],
    },
    plugins: [
      new webpack.DefinePlugin({
        CONFIG: JSON.stringify(require(process.env['M4M_WEB_CONFIG'] || './config.json')),
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, 'src/index.html'),
        inject: true,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
        },
        chunksSortMode: 'dependency',
      }),
    ],
  },
];
