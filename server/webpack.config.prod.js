const path = require('path');
const webpackModules = require('./webpack.modules.prod');
const webpackPlugins = require('./webpack.plugins.prod');

const config = {
  entry: './src/index.js',
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
  },
  target: 'web',
  module: webpackModules,
  plugins: webpackPlugins,
};

module.exports = config;
