const path = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./webpack.common');

// root path for this project
const ROOT = __dirname;

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.join(ROOT, '/build'),
    filename: '[name].[contenthash].bundle.js',
  },
  plugins: [new CleanWebpackPlugin()],
});
