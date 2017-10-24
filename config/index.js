/**
 * 构建工具环境配置
 * 环境：
 *   1.production - 生产环境
 *   2.test - 测试环境
 *   3.development - 开发环境
 */
const path = require('path');

module.exports = {
  build: {
    env: { NODE_ENV: 'production' },
    assetsPublicPath: './',
    assetsRoot: path.resolve(__dirname, '../dist'),
    cssAssetsPublicPath: '../',
    staticAssetsDirectory: 'static',
    productionSourceMap: false
  },
  test: {
    env: { NODE_ENV: 'test' },
    assetsPublicPath: './',
    assetsRoot: path.resolve(__dirname, '../test'),
    cssAssetsPublicPath: '../',
    staticAssetsDirectory: 'static',
    productionSourceMap: false
  },
  dev: {
    env: { NODE_ENV: 'development' },
    assetsPublicPath: '/',
    staticAssetsDirectory: 'static',
    port: 80,
    autoOpenBrowser: true,
    proxyTable: {
      '/api': {
        // 代理请求地址
        target: 'http://xx.xx.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/xx/api'
        }
      }
    }
  }
};