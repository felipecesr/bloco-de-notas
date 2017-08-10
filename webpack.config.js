const path = require('path');
const webpack = require('webpack');

// const nodeENV = process.env.NODE_ENV || 'production';

module.exports = {
  // devtool: 'source-map',
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
        // query: {
        //   presets: [
        //     ['es2015', { modules: false }],
        //   ],
        // },
      },
    ],
  },
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin({
  //     compress: { warnings: false },
  //     output: { comments: false },
  //     sourceMap: true,
  //   }),
  //   new webpack.DefinePlugin({
  //     'process.env': { NODE_ENV: JSON.stringify(nodeENV) },
  //   }),
  // ],
};
