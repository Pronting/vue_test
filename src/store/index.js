// 该文件用于创建VueX中最为核心的store
import Vuex from 'vuex'
import Vue from 'vue'
import countOptions from './count'
import personOptions from './person'

//使用Vuex插件
Vue.use(Vuex)


//创建并暴露store
export default new Vuex.Store({
    modules: {
        countOptions,
        personOptions
    }
})
