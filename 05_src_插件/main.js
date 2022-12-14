// 引入Vue App
import Vue from "vue";
import App from "./App.vue";
import plugins from "@/plugins";
// 关闭Vue中的语法提示
Vue.config.productionTips = false;
// 应用（使用）插件
Vue.use(plugins);

new Vue({
  el: "#app",
  render: (h) => h(App),
});
