'use strict'
const path = require('path')
const defaultSettings = require('./src/config/index.js')
// const config = require('./src/config/index.js')
// 拼接路径
function resolve(dir) {
    return path.join(__dirname, dir)
}
const name = defaultSettings.title || 'item-test' // 页面标题
const targeUrl = 'http://item-testapi:8086' // 本地开发环境调用接口路径
const port = 8086 // 端口号
const externals = {
  vue: 'Vue',
  'vue-router': 'VueRouter',
  vuex: 'Vuex',
  axios: 'axios'
}
// cdn资源库
const cdn = {
  // 开发环境
  dev: {
    css: [],
    js: []
  },
  // 生产环境
  build: {
    css: ['https://cdn.jsdelivr.net/npm/vant@beta/lib/index.css'],
    js: [
      'https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/vue-router/3.0.6/vue-router.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/vuex/3.1.1/vuex.min.js',
    ]
  }
}
module.exports = {
    publicPath: './', 
    outputDir: 'dist', // 项目打包生成文件的存储路径
    assetsDir: 'static', // 项目打包静态资源的目录
    lintOnSave: process.env.NODE_ENV === 'development', // 设置eslint代码检查
    productionSourceMap: false, // 如果您不需要生产时的源映射，那么将此设置为false可以加速生产构建
    devServer: {
      port: port, // 端口号
      host: "localhost",
      https: false, // https:{type:Boolean}
      open: true, //配置自动启动浏览器
      overlay: { // eslint检查 配置警告和错误展示
        warnings: false,
        errors: true
      },
      // 需要在开发环境下将 API 请求代理到 API 服务器
      proxy: {
        "/api": {
          target: targeUrl,
          pathRewrite: { // 请求地址
            '^/api': '/api'
          },
          disableHostCheck: true
        }
      }
    },
    // webpack打包配置
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生成环境...
            // externals里的模块不打包
            Object.assign(config, {
                name: name,
                externals: externals
            })
        } else {
            // 为开发环境...
            config.mode = 'development'
        }
    }
}