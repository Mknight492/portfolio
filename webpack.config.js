const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");
var CopyWebpackPlugin = require('copy-webpack-plugin');

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const presetConfig = require("./build-utils/loadPresets");



module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  return webpackMerge(
    {
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
                  limit: 50000000
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
      output: {
        filename: "bundle.js",
      },
      plugins: [
        new HtmlWebpackPlugin({ 
          template: './src/index.html',
          filename: 'index.html',
          inject: 'body' }),
        new webpack.ProgressPlugin(),
        new CopyWebpackPlugin([{ from: './src/assets', to: '' }]),
      ]
    },
    modeConfig(mode),
    presetConfig({ mode, presets })
  );
};

/* , 'plugin-transform-regenerator' */