const webpack = require('webpack');
const { developmentPort, assetsDir } = require('./common');
const baseConfig = require('./base');

const development = Object.assign({}, baseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',

  entry: {
    ...baseConfig.entry,
    main: [
      `webpack-dev-server/client?http://localhost:${developmentPort}`,
      'webpack/hot/only-dev-server',
    ].concat(baseConfig.entry.main),
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ].concat(baseConfig.plugins),

  devServer: {
    host: 'localhost',
    allowedHosts: ['.ngrok.io'],
    port: parseInt(developmentPort, 10),
    historyApiFallback: true,
    hot: true,
    contentBase: assetsDir,
  },
});

module.exports = development;
