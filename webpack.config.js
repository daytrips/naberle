const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, './client/index.jsx'),
  output: {
    path: path.join(__dirname, 'bundles'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
    ],
  },
};
