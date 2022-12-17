

// 引入Vue App
import Vue from 'vue';
import App from './App.vue';

// 关闭Vue中的语法提示
Vue.config.productionTips = false;
// 全局混合
// Vue.mixin(mixin2)


new Vue({
    el: '#app',
    render: h => h(App)
})

