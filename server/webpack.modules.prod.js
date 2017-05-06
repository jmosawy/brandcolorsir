/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  rules: [
    {
      test: /\.(js|vue)$/,
      exclude: [
        path.resolve(__dirname, '../node_modules'),
      ],
      use: [
        { loader: 'eslint-loader', options: { failOnError: true } },
      ],
      enforce: 'pre',
    },
    {
      test: /\.vue$/,
      exclude: [
        path.resolve(__dirname, '../node_modules'),
      ],
      use: 'vue-loader',
    },
    {
      test: /\.js$/,
      exclude: [
        path.resolve(__dirname, '../node_modules'),
      ],
      use: [
        { loader: 'babel-loader' },
      ],
    },
    {
      test: /\.scss$/,
      exclude: [
        path.resolve(__dirname, '../node_modules'),
      ],
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          { loader: 'css-loader', options: { minimize: true } },
          { loader: 'resolve-url-loader' },
          { loader: 'sass-loader?sourceMap' },
          { loader: 'postcss-loader' },
        ],
      }),
    },
    {
      test: /\.(woff|woff2)$/,
      use: [
        { loader: 'file-loader', options: { name: 'fonts/[name].[ext]' } },
      ],
    },
    {
      test: /\.(gif|jpg|png)$/,
      use: [
        { loader: 'url-loader', options: { name: 'images/[name].[ext]?[hash]', limit: 5000 } },
      ],
    },
    {
      test: /\.svg$/,
      use: [
        { loader: 'file-loader', options: { name: 'images/[name].[ext]?[hash]' } },
      ],
    },
  ],
};
