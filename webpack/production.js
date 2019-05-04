const baseConfig = require('./base');
const { areSourceMapsDisabled } = require('./common');

module.exports = Object.assign({}, baseConfig, {
  mode: 'production',
  devtool: areSourceMapsDisabled ? 'none' : 'source-map',
});
