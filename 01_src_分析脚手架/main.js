/**
 * ? 该文件是整个文件的入口文件
 */

// ? 引入Vue
import Vue from 'vue';
// ? 引入App组件，她是所有组件的父组件
import App from './App.vue'
// ? 关闭Vue的生产提示
Vue.config.productionTip = false


let a = 2;
new Vue({
  // ? 将App组件放入了容器中
  // template: '<h1>你好啊</h1>',
  components: {App},
  render:h => h(App)
}).$mount('#app')
