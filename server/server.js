/* eslint-disable import/no-extraneous-dependencies */

const browserSync = require('browser-sync').create();
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.base');

const DEV_PORT = 3000;
const compiler = webpack(webpackConfig);

browserSync.init({
  server: {
    baseDir: '../dist',
    index: 'index.html',
  },
  codeSync: true,
  files: ['../dist'],
  notify: true,
  port: DEV_PORT,
  middleware: [
    webpackDevMiddleware(compiler, {
      publicPath: '/',
      hot: true,
      stats: { colors: true },
    }),
    webpackHotMiddleware(compiler, {
      reload: true,
    }),
  ],
});
