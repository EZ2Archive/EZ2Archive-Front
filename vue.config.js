module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  outputDir: './docs',
  publicPath: '/EZ2Archive-Front/',
  lintOnSave: false,
  chainWebpack: config => {
    config
        .plugin('html')
        .tap(args => {
            args[0].title = "EZ2 ARCHIVE";
            return args;
        })
  },
  devServer:{
    proxy: {
      // 프록시 요청을 보낼 api의 시작 부분
      '/login': {
          // 프록시 요청을 보낼 서버의 주소
          target: process.env.VUE_APP_SERVER,
          changeOrigin: true
      },

    }
  }
  
}
