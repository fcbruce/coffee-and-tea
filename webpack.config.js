/*
 *
 * Author : Lv Li <t-lvli@microsoft.com>
 *
 * Time : Fri, Aug 26, 2016  5:24:07 PM
 *
 */
const path = require('path');

module.exports = {
  entry: './src/client/app.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
};
