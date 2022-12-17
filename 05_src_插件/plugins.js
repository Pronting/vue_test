export default {
  install(Vue) {


    //   参数是Vue的构造函数
    console.log("install ! !" + Vue);


    // 全局过滤器
    Vue.filter("mySlice",function(value){
        return value.slice(0,4)
    })


    // 定义全局自定义指令
    Vue.directive("fbind",{
        // 指令与元素陈工绑定时(一上来)
        bind(element,binding){
            element.value = binding.value;
        },
        // 指令所在的元素被插入页面时
        inserted(element,binding){
            element.focus();
        },
        update(element,binding){
            element.value = binding.value;
        }
    })

    
    // 定义混入
    Vue.mixin({
        data(){
            return {
                x:100,
                y:200
            }
        }
    })


    // 给Vue原型上添加一个方法(vm和vc都能使用了)
    Vue.prototype.hello = ()=>{alert("你好啊！")}
  },
};
