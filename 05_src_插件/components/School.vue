<template>
  <div class="demo">
    <!-- 组件的结构 -->
    <h2>学校名称: {{ name | mySlice }}</h2>
    <h2>学校地址:{{ address }}</h2>
    <button @click="test">点我测试Hello</button>
  </div>
</template>

<script>
// 引入一个混合
export default {
  name: "MySchool",
  data() {
    return {
      name: "武汉软件工程职业学院",
      address: "湖北省武汉市",
    };
  },
  methods:{
    test(){
      this.hello();
    }

  }
};
//  组件的交互代码(数据方法等)
</script>

<style lang="postcss" scoped>
/* 组件的样式 */
.demo {
  background-color: pink;
}
</style>
