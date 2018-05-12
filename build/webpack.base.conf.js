/**
 * Created by ed on 18/03/2018.
 */

'use strict';

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const sourcePath = process.env['M4M_SOURCE'] || path.resolve(__dirname, '../src');
const distPath = process.env['M4M_DIST'] || path.resolve(__dirname, '../dist');
const staticPath = process.env['M4M_STATIC'] || path.resolve(__dirname, '../public');

module.exports = {
  entry: [path.resolve(sourcePath, './index.js')],
  output: {
    path: distPath,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components|dist|public)/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                useBuiltIns: 'usage',
              },
            ],
            '@babel/preset-react',
          ],
        },
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
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
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(sourcePath, './index.html'),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
      chunksSortMode: 'dependency',
    }),
    new CopyWebpackPlugin([
      {from: staticPath},
    ]),
  ],
};
