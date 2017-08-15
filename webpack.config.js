const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const plugins = [new ExtractTextPlugin('styles.css')];

if (process.env.NODE_ENV === 'production') {
  plugins.push(new webpack.optimize.ModuleConcatenationPlugin());

  plugins.push(
    new HtmlWebpackPlugin({
      hash: true,
      minify: {
        html5: true,
        collapseWhitespace: true,
        removeComments: true,
      },
      template: './index.html',
    })
  );

  plugins.push(new OptimizeCSSAssetsPlugin({
    cssProcessor: require('cssnano'),
    cssProcessorOptions: {
      discardComments: {
        removeAll: true
      }
    },
    canPrint:	true
  }));

  plugins.push(new webpack.optimize.UglifyJsPlugin());
} else {
  plugins.push(
    new HtmlWebpackPlugin({
      hash: true,
      template: './index.html',
    })
  );
}

module.exports = {
  devtool: 'source-map',
  entry: {
    app: './src/js/main.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
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
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'stylus-loader'],
        }),
      },
    ],
  },
  plugins,
};
