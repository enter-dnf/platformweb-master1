module.exports = {
  devServer: {
    port: 8888,     // 端口
  },
  configureWebpack : {
    resolve: {
      alias : {
        /*
        别名
        @ = src
*/
        'assets' : '@/assets',
        'common' : '@/common',
        'components' : '@/components',
        'network' : '@/network',
        'views' : '@/views',
      }
    }
  }
}