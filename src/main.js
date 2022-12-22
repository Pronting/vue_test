//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入VueX
import Vuex from 'vuex'
//关闭Vue的生产提示
Vue.config.productionTip = false
//引入插件
Vue.use(Vuex)

//创建vm
const vm = new Vue({
	el:'#app',
	store: 'hello',
	render: h => h(App),
	beforeCreate() {
		Vue.prototype.$bus = this
	},
})
console.log(vm)