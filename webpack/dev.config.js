const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseConfig, {
  devtool: 'source-map',

  module: {
    rules: [{
      test: /\.styl$/,
      use: [
        { loader: 'style-loader' },
        {
          loader: 'css-loader',
          options: { sourceMap: true }
        },
        {
          loader: 'postcss-loader',
          options: { sourceMap: true }
        },
        {
          loader: 'stylus-loader',
          options: { sourceMap: true }
        }
      ]
    }]
  },

  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/index.html',
    })
  ]
});
