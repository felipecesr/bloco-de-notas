const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

const plugins = [
  new ExtractTextPlugin('styles.css'),
  new SpriteLoaderPlugin()
];

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

  plugins.push(new webpack.optimize.UglifyJsPlugin({
    sourceMap: false,
    output: {comments: false},
  }));
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
          use: [
            { loader: 'css-loader', options: { sourceMap: true } },
            { loader: 'postcss-loader', options: { sourceMap: true } },
            { loader: 'stylus-loader', options: { sourceMap: true } },
          ],
        }),
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              extract: true,
              spriteFilename: 'icons.svg',
            },
          },
          'svgo-loader',
        ],
      },
    ],
  },
  plugins,
};
