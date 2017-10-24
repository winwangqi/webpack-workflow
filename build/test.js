process.env.NODE_ENV = 'test';

const config = require('../config');
const rm = require('rimraf');
const webpack = require('webpack');
const webpackConfig = require('./webpack.test.config');

rm(config.test.assetsRoot, err => {
  if (err) throw err;

  webpack(webpackConfig, (err, stats) => {
    if (err) return console.log(err);

    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n');
  });
});