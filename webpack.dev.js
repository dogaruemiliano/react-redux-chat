const path = require('path');
const fs = require('fs');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

// root path for this project
const ROOT = __dirname;

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: './build',
    watchContentBase: true,
    hot: true,
    open: true,
    historyApiFallback: true,
    port: 3000,
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(ROOT, 'build'),
  },
  module: {
    rules: [{
      test: /\.s?css$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
      }, {
        loader: 'sass-loader',
      }],
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
});
