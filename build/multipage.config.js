const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');
const path = require('path');

const ret = {
  entry: {},
  plugins: []
};

const dir = path.resolve(__dirname, '../src');

const reg = /(.*)\.html$/;

const files = fs.readdirSync(dir);

files.forEach(file => {
  if (reg.test(file)) {
    const name = reg.exec(file)[1];
    const htmlPlugin = new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: `src/${name}.html`,
      chunks: process.env.NODE_ENV === 'development' ? [name] : ['manifest', 'vendor', name]
    });

    ret.entry[name] = `src/js/${name}.js`;
    ret.plugins.push(htmlPlugin);
  }
});

module.exports = ret;
