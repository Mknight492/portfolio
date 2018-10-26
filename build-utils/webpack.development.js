const postcssPresetEnv = require('postcss-preset-env');

module.exports = () => (module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-mixins'),
                postcssPresetEnv({
                  exportTo: './dist/file.css',
                  features: {
                    'nesting-rules': true,
                  },
                }),
                require('postcss-simple-vars')(),
                require('postcss-import')(),
                require('postcss-hexrgba'),
              ],
            } 
          }        ,
          'resolve-url-loader',
          'sass-loader',
        ],
      },
    ],
  },
  devServer: {
    stats: 'errors-only',
    contentBase: './src/index.js',
  },
}
);
