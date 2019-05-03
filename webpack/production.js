const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const baseConfig = require('./base');
const { areSourceMapsDisabled } = require('./common');

module.exports = Object.assign({}, baseConfig, {
  mode: 'production',
  devtool: areSourceMapsDisabled ? 'none' : 'source-map',

  plugins: [
    new UglifyJsPlugin({
      sourceMap: !areSourceMapsDisabled,
      uglifyOptions: {
        output: {
          comments: false,
        },
      },
    }),
  ].concat(baseConfig.plugins),
});
