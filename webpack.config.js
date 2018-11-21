const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackMerge = require('webpack-merge')
var CopyWebpackPlugin = require('copy-webpack-plugin')

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env)
const presetConfig = require('./build-utils/loadPresets')


module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
  let publicPath
  if (mode === 'development') {
    publicPath = '/'
  } else {
    publicPath = '/'
  }

  return webpackMerge({
    entry: {
      'main': path.resolve(__dirname, './source/index.js')
    },
    output: {
      path: path.resolve(__dirname, './wwwroot/'),
      filename: 'bundle.js',
      publicPath: publicPath

    },
    mode,
    module: {
      rules: [{
        test: /\.(gif|jpg|jpeg|tiff|png|svg)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 500
          }
        }]
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './source/index.html'),
        filename: 'index.html',
        inject: 'body'
      }),
      new webpack.ProgressPlugin(),
      new CopyWebpackPlugin([{
        from: path.resolve(__dirname, './source/assets'),
        to: ''
      }])
    ]
  },
  modeConfig(mode),
  presetConfig({
    mode,
    presets
  })
  )
};

// { 'main': path.resolve(__dirname, './wwwroot/source/index.js')},
