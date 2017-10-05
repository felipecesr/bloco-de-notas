const webpack = require('webpack');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
  entry: {
    app: './src/js/main.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_module/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              extract: true,
              spriteFilename: 'icons.svg'
            }
          },
          'svgo-loader'
        ]
      }
    ]
  },

  plugins: [
    new webpack.EnvironmentPlugin([
      'NODE_ENV'
    ]),
    new SpriteLoaderPlugin()
  ]
};
