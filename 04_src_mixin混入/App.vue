<template>
  <div class="app">
    <!-- 组件实例对象 -->
    <Student />
    <hr />
    <School />
  </div>
</template>

<script>
import Student from "@/components/Student";
import School from "@/components/School";
export default {
  name: "App",
  components: { Student, School },
  data() {
    return {
      msg: "欢迎学习Vue",
    };
  },
};
</script>

<style></style>
