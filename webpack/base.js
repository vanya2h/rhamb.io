const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
        use: 'babel-loader',
        exclude: [/(node_modules)/],
      },
      {
        test: /\.(png | gif | jpg | woff | woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
      {
        test: /\.svg$/,
        loader: 'url-loader',
        options: {
          limit: 8,
        },
      },
      {
        test: /\.mp4$/,
        use: 'file-loader',
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
