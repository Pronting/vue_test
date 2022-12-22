const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false, // !关闭语法检查
//  开启代理服务器(方式一)
//   devServer:{
//     proxy:"http://localhost:5000"
//   },
  //  开启代理服务器(方式二)
  devServer:{
    proxy:{
      '/api':{
        target:'http://localhost:5000',
        pathRewrite:{"^/api":""},
        //用于支持websocket
        ws:true,
        changeOrigin:true // 用于控制请求头中host值
      // },
      // '/foo':{
      //   target:'<other_url>'
      },
      '/demo':{
        target:'http://localhost:5001',
        pathRewrite:{"^/demo":""},
        ws:true,
        changeOrigin:true
        // },
        // '/foo':{
        //   target:'<other_url>'
      }
    }
  }
})
