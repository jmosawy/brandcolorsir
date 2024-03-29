/* eslint-disable import/no-extraneous-dependencies */

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
  new webpack.HotModuleReplacementPlugin(),
  new ExtractTextPlugin('app.css?[contenthash]'),
];
