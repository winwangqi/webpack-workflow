const config = require('../config');
const path = require('path');
const webpack = require('webpack');
const webpackBaseConfig = require('./webpack.base.config');
const webpackMerge = require('webpack-merge');

Object.keys(webpackBaseConfig.entry).forEach(name => {
  webpackBaseConfig.entry[name] = ['./build/dev.client'].concat(webpackBaseConfig.entry[name]);
});

const devConfig = webpackMerge(webpackBaseConfig, {
  output: {
    publicPath: config.dev.assetsPublicPath
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'px2rem-loader?remUnit=75&remPrecision=8']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'px2rem-loader?remUnit=75&remPrecision=8', 'less-loader']
      }
    ]
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // 这是设置的变量前端 js 可以访问的到
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    })
  ]
});

module.exports = devConfig;