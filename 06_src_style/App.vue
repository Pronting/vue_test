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
};
</script>

<style lang="less">
  .app{
    background-color:blue;
    .qwe{
      font-size: 40px;
    }
  }
</style>

