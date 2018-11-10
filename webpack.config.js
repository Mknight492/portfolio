const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");
var CopyWebpackPlugin = require('copy-webpack-plugin');

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const presetConfig = require("./build-utils/loadPresets");



module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  return webpackMerge(
    {
      entry:  { 'main': path.resolve(__dirname, './wwwroot/source/index.js')},
      output: {
       
        path: path.resolve(__dirname, './wwwroot/dist'),
        filename: 'bundle.js',
        publicPath: '/'
        
      },
      devtool: 'inline-source-map',
      mode,
      module: {
        rules: [
          {
            test: /\.(gif|jpg|jpeg|tiff|png|svg)$/i,
            use: [
              {
                loader: "url-loader",
                options: {
                  limit: 5000000
                }
              }
            ]
          },
          {
            test: /\.html$/,
            loader: "raw-loader"
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use:{
                loader: 'babel-loader'
            }
        }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({           
          template: path.resolve(__dirname, './wwwroot/source/index.html'),
          filename: 'index.html',
          inject: 'body' }),
        new webpack.ProgressPlugin(),
        new CopyWebpackPlugin([{ from: path.resolve(__dirname, './wwwroot/source/assets'), to: '' }]),
        new CopyWebpackPlugin([{ from: path.resolve(__dirname, './wwwroot/source/assets/webfonts'), to: '../webfonts' }]),
      ]
    },
    modeConfig(mode),
    presetConfig({ mode, presets })
  );
};



//{ 'main': path.resolve(__dirname, './wwwroot/source/index.js')},