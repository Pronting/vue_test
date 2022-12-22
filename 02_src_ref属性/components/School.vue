<template>
<div class="school">
<!-- 组件的结构 -->
    <h2>学校名称: {{name}}</h2>
    <h2>学校地址:{{address}}</h2>
  <input type="text" ref="input"/>
    <button @click="showName">点我提示学校名称</button>
    <button @click="showInputValue">点我显示输入框</button>
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
        },
      showInputValue(){
        console.log(this.$refs.input.value);
      }
    }
  }
//  组件的交互代码(数据方法等)
</script>

<style lang="postcss" scoped>
/* 组件的样式 */
.school{
    background-color: gray;

}
</style>
