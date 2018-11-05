const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const postcssPresetEnv = require('postcss-preset-env');

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
                exportTo: './dist/file.css',
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
  plugins: [new MiniCssExtractPlugin()]
})

//              require('cssnano')(),
