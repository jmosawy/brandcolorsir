const path = require('path');
const webpackModules = require('./webpack.modules');
const webpackPlugins = require('./webpack.plugins');

const config = {
  entry: ['./src/index.js', 'webpack-hot-middleware/client'],
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
  },
  target: 'web',
  module: webpackModules,
  plugins: webpackPlugins,
};

module.exports = config;
