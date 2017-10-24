const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('../config');
const multipageConfig = require('./multipage.config');
const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

function resolve (dir) {
  return path.resolve(__dirname, '../', dir);
}

console.log(`NODE_ENV :: ${process.env.NODE_ENV}`);

module.exports = webpackMerge({
  output: {
    path: resolve('dist'),
    filename: '[name].[hash].js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
      src: resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-2']
            // https://stackoverflow.com/questions/29576341/what-does-the-code-generator-has-deoptimised-the-styling-of-some-file-as-it-e
          }
          // query: { compact: false }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'img/[hash].[ext]',
              // publicPath: '../',
              limit: 8192
            }
          },
          // {
          //   loader: 'image-webpack-loader',
          //   options: {
          //     query: {
          //       mozjpeg: {
          //         progressive: true
          //       },
          //       gifsicle: {
          //         interlaced: true
          //       },
          //       optipng: {
          //         optimizationLevel: 7
          //       },
          //       pngquant: {
          //         quality: '65-90',
          //         speed: 4
          //       }
          //     }
          //   }
          // }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true
            }
          }
        ]
        // exclude: resolve('src/index.html')
      }
    ]
  },
  externals: {
    wx: 'wx'  // weixin
  }
}, multipageConfig);
