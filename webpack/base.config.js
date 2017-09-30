const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/js/main.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [/node_module/],
        use: [{
          loader: 'babel-loader'
        }]
      }
    ]
  },

  plugins: [
    new webpack.EnvironmentPlugin([
      'NODE_ENV'
    ])
  ]
};
