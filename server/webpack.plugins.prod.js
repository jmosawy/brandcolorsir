/* eslint-disable import/no-extraneous-dependencies */

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const COPYRIGHT_TEXT = 'Copyright 2017\nCode by Jeff Mosawy\n\nhttp://www.jmosawy.com\nj@mosawy.net';

module.exports = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks(module) {
      return module.context && module.context.indexOf('node_modules') !== -1;
    },
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'manifest',
  }),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'index.html',
    inject: true,
  }),
  new UglifyJsPlugin(),
  new ExtractTextPlugin('app.css?[contenthash]'),
  new webpack.BannerPlugin({ banner: COPYRIGHT_TEXT }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
];
