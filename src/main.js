//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//完整引入
//引入ElementUI组件库
// import ElementUI from 'element-ui';
//引入ElementUI的全部样式
// import 'element-ui/lib/theme-chalk/index.css';
//关闭Vue的生产提示
//按需引入
import { Button,Row,DatePicker } from 'element-ui';
Vue.config.productionTip = false
Vue.component(Button.name,Button)
Vue.component(Row.name,Row)
Vue.component(DatePicker.name,DatePicker)
//应用ElementUI
// Vue.use(ElementUI);
//应用插件
//创建vm
new Vue({
    el: '#app',
    render: h => h(App)
})