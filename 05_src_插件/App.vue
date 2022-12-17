<template>
  <div class="app">
    <Student /> <hr />
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

