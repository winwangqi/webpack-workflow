const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const config = require('../config');
const path = require('path');
const webpack = require('webpack');
const webpackBaseConfig = require('./webpack.base.config');
const webpackMerge = require('webpack-merge');

const extractCSS = new ExtractTextPlugin('css/vendor.[contenthash].css');
const extractLESS = new ExtractTextPlugin('css/[name].[contenthash].css');

module.exports = webpackMerge(webpackBaseConfig, {
  devtool: config.test.productionSourceMap ? '#source-map' : false,
  output: {
    path: config.test.assetsRoot,
    publicPath: config.test.assetsPublicPath,
    filename: 'js/[name].[chunkhash].js',
    chunkFilename: 'js/[id].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: extractCSS.extract({
          use: ['css-loader', 'px2rem-loader?remUnit=75&remPrecision=8'],
          publicPath: config.test.cssAssetsPublicPath
        }),
      },
      {
        test: /\.less$/,
        use: extractLESS.extract({
          use: ['css-loader', 'px2rem-loader?remUnit=75&remPrecision=8', 'less-loader'],
          publicPath: config.test.cssAssetsPublicPath
        }),
      }
    ]
  },
  plugins: [
    extractCSS,
    extractLESS,
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        // this assumes your vendor imports exist in the node_modules directory
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        );
      }
    }),
    //CommonChunksPlugin will now extract all the common modules from vendor and main bundles
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest', //But since there are no more common modules between them we end up with just the runtime code included in the manifest file
      chunks: ['vendor']
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"test"'
      }
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.test.staticAssetsDirectory
      }
    ])
  ]
});