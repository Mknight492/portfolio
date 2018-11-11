const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const postcssPresetEnv = require('postcss-preset-env');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path")

module.exports = () => (module.exports = {
  module: {
    rules: [{

      test: /\.scss$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: () => [
              require('postcss-import'),
              require('postcss-mixins'),
              postcssPresetEnv({
                exportTo: './wwwroot/dist/file.css',
                features: {
                  'nesting-rules': true
                }
              }),
              require('postcss-simple-vars')(),
              require('postcss-hexrgba'),
              require('postcss-selector-not')
            ]
          }
        },
        "resolve-url-loader",
        "sass-loader"
      ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../source/index.html'),
      filename: '../views/home/index.cshtml',
      inject: 'body' })
  ]
})

//              require('cssnano')(),
