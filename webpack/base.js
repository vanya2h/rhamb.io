const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { sourceDir, buildDir, isAnalyzeEnabled } = require('./common');

const baseConfig = {
  entry: {
    main: [`${sourceDir}/index.js`],
  },
  output: {
    path: buildDir,
    publicPath: '',
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '~': sourceDir,
    },
  },
  module: {
    rules: [
      {
        test: /\.po$/,
        loader: '@lingui/loader',
      },
      {
        test: /\.(js|jsx)?$/,
        loader: 'babel-loader',
        options: {
          configFile: resolve('babel.config.js'),
        },
        include: [resolve('source'), resolve('node_modules/ui.rhamb.io')],
      },
      {
        test: /\.(png|gif|jpg|woff|woff2)$/,
        loader: 'url-loader',
        exclude: /node_modules\/(?!(ui.rhamb.io)\/).*/,
        options: {
          limit: 10000,
        },
      },
      {
        test: /\.svg$/,
        loader: 'url-loader',
        exclude: /node_modules\/(?!(ui.rhamb.io)\/).*/,
        options: {
          limit: 8,
        },
      },
      {
        test: /\.mp4$/,
        use: 'file-loader',
        exclude: /node_modules\/(?!(ui.rhamb.io)\/).*/,
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new HtmlWebpackPlugin({
      chunks: ['main'],
      template: `${sourceDir}/index.html`,
      hash: true,
      minify: {
        collapseWhitespace: true,
      },
    }),
  ].concat(isAnalyzeEnabled ? new BundleAnalyzerPlugin() : []),
  stats: {
    children: false,
    modules: false,
  },
};

module.exports = baseConfig;
