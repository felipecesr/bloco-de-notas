const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  context: path.resolve(__dirname, './src/js'),
  entry: {
    app: './main.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist/js'),
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [/node_module/],
        use: [{
          loader: 'babel-loader',
        }],
      },
    ],
  },
};
