module.exports = {
  baseUrl: '',
  outputDir: 'dist',
  css: {
    loaderOptions: {
      // 引入全局scss
      // sass: {
      //   data: `@import "@/assets/scss/common.scss";`
      // },
      // 引入iconfont
      css: {
        data: `@import "@/assets/fonts/iconfont.css";`
      }
    }
  },
  devServer: {
    // 配置服务器代理
    proxy: {
      '/apis': {
        target: 'http://10.222.1.52:8084/',
        // websocket
        ws: true,
        // 是否跨域
        changeOrigin: true,
        pathRewrite: {
          '^/apis': ''
        }
      }
    }
  },
  // // 使用vux
  // configureWebpack: config => {
  //   require('vux-loader').merge(config, {
  //     options: {},
  //     plugins: ['vux-ui']
  //   })
  // }
}