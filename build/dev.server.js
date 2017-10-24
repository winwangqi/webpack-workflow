const config = require('../config');
const path = require('path');

// set enviroment variable
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = config.dev.env.NODE_ENV;
}

const express = require('express');
const httpProxyMiddleware = require('http-proxy-middleware');
const opn = require('opn');
const proxyTable = config.dev.proxyTable;
const webpack = require('webpack');
const webpackConfig = require('./webpack.dev.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const compiler = webpack(webpackConfig);

// webpack-dev-middleware
const devMiddleware = webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  // display nothing to the console
  quiet: true
});

// webapck-hot-middleware
const hotMiddleware = webpackHotMiddleware(compiler);

// add hot-reload related code to entry chunks
compiler.plugin('compilation', compilation => {
  compilation.plugin('html-webpack-plugin-after-emit', (data, cb) => {
    hotMiddleware.publish({ action: 'reload' });
    cb();
  });
});

const app = express();
const port = config.dev.port || 8888;

app.use(devMiddleware);
app.use(hotMiddleware);

// http-proxy-middleware
Object.keys(proxyTable).forEach(context => {
  let options = proxyTable[context];

  if (typeof options === 'string') {
    options = { target: options };
  }

  app.use(httpProxyMiddleware(context, options));
});

// expose static resource
app.use(path.posix.join(config.dev.assetsPublicPath, config.dev.staticAssetsDirectory), express.static(path.resolve(__dirname, '../static')));

app.listen(port);

opn(`http://localhost:${ port }`);
