<template>
<div class="demo">
<!-- 组件的结构 -->
    <h2>学校名称: {{name}}</h2>
    <h2>学校地址:{{address}}</h2>
    <button @click="showName">点我提示学校名称</button>
</div>
</template>

<script>
  export default{
        name:"MySchool",
       data(){
        return {
            name:'武汉软件工程职业学院',
            address:'湖北武汉'
        }
    },
    methods:{
        showName(){
            alert(this.name)
        }
    }
  }
//  组件的交互代码(数据方法等)
</script>

<style lang="postcss" scoped>
/* 组件的样式 */
.demo{
    background-color: orange;

}
</style>
