# webpack-workflow

## 概述

webpack 前端工作流

## 用法

```bash
$ git clone https://github.com/winwangqi/webpack-workflow.git
$ npm install
$ npm run dev
```

## 背景

在前端开发中，传统的开发方式是在 HTML 文件中手动引入 CSS、JS 等资源文件，手动修改资源文件版本，手动刷新浏览器查看修改效果。

传统开发方式中存在着许多问题，例如：不可使用 CSS 预处理器；无法使用 JS 最新特性；手动管理 JS 引入顺序；手动修改资源版本，存在不可预估的错误；需要手动刷新浏览器查看效果，拖延开发效率。上述等等的一些问题摆在了前端开发者的面前。

在 2009 年 [Node.js](https://nodejs.org/en/) 的出现，加速了前端构建工具的发展，其后涌现出了 [Gulp](https://gulpjs.com/)，[Grunt](https://gruntjs.com/)，[browerify](http://browserify.org/) 等的工具来解决上述问题，但是在某些方面总是不尽如人意。[webpack](https://webpack.js.org/) 这款工具应运而生，它的许多特性成了前端开发者手中的一把利剑，成为当下最为流行的构建工具之一。

## 特性

本项目为基于 webpack 书写的一套前端开发脚手架，支持以下特性：

- CSS 预处理器
- 支持 ES6 语法
- 请求代理
- 热更新
- 资源压缩打包
- 自动版本号替换
- 支持开发环境、测试环境、生产环境配置

## 构建

### 开发环境

`npm run dev`

不生成目录，在内存中运行

### 测试环境

`npm run test`

目标目录：`test`

### 生产环境

`npm run build`

目标目录：`dist`

## 目录结构

```text
- build
  |- build.js
  |- dev.client.js
  |- dev.server.js
  |- multipage.config.js
  |- test.js
  |- webpack.base.config.js
  |- webpack.dev.config.js
  |- webpack.prod.config.js
  |- webpack.test.config.js
- config
  |- index.js
- src
  |- config
     |- index.js
     |- base.config.js
     |- dev.config.js
     |- prod.config.js
     |- test.config.js
  |- img
  |- js
  |- less
  |- util
  |- index.html
- static
- .gitignore
- package-lock.json
- package.json
- README.md
```

## 参考

- [webpack 官网](https://webpack.js.org/)
- [Vue 脚手架](https://github.com/vuejs-templates/webpack)

## 特别感谢

本项目参考 Vue 官方脚手架，特别感谢 Vue 脚手架项目。