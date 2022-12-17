<template>
  <div class="demo">
    <!-- 组件的结构 -->
    <h2 @click="showName">学生姓名: {{ name }}</h2>
    <h2>学生姓名: {{ sex }}</h2>
    <h2>学生年龄:{{ age }}</h2>
  </div>
</template>

<script>
import { mixin,mixin2 } from "../mixin";
export default {
  name: "MyStudent",
  data() {
    return {
      name: "张三",
      sex: "男",
      age: 18,
    };
  },
  mixins: [mixin,mixin2],
};
//  组件的交互代码(数据方法等)
</script>

<style lang="postcss" scoped>
/* 组件的样式 */
.demo {
  background-color: pink;
}
</style>
