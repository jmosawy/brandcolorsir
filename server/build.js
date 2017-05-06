process.env.NODE_ENV = 'production';

const webpack = require('webpack');
const webpackConfig = require('./webpack.config.prod');

webpack(webpackConfig, (err, stats) => {
  if(err || stats.hasErrors()) {
    console.error(stats);
    return 0;
  }

  console.log('DONE!');
});
