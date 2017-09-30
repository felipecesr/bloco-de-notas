const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssNano = require('cssnano');

module.exports = merge(baseConfig, {
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },

  module: {
    loaders: [
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader' },
            { loader: 'postcss-loader' },
            { loader: 'stylus-loader' },
          ],
        }),
      }
    ]
  },

  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      minify: {
        html5: true,
        collapseWhitespace: true,
        removeComments: true,
      },
      template: './src/index.html',
    }),
    new OptimizeCSSAssetsPlugin({
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {
        discardComments: {
          removeAll: true
        }
      },
      canPrint: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      output: {comments: false},
    }),
    new ExtractTextPlugin('styles.css')
  ],
});
