<template>
  <div class="app">
    <!-- 组件实例对象 -->
    <Student name="李四" sex="女"  />
    <hr />
    <!-- <Student />
    <hr />
    <Student /> -->
  </div>
</template>

<script>
import Student from "@/components/Student";
export default {
  name: "App",
  components: { Student },
  data() {
    return {
      msg: "欢迎学习Vue",
    };
  },
};
</script>

<style></style>
