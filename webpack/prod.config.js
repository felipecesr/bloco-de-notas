const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssNano = require('cssnano');

module.exports = merge(baseConfig, {
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      minify: {
        html5: true,
        collapseWhitespace: true,
        removeComments: true,
      },
      template: './index.html',
    }),
    new OptimizeCSSAssetsPlugin({
      cssProcessor: cssNano,
      cssProcessorOptions: {
        discardComments: {
          removeAll: true,
        },
      },
      canPrint: true,
    }),
    new webpack.optimize.UglifyJsPlugin(),
  ],
});
