<template>
  <div class="app">
    <h1 v-text="msg" ref="title"></h1>
    <School />
    <School />
    <!-- 组件实例对象 -->
    <School ref="sch"/>
    <button @click="showDOM">点我输出上方的DOM元素</button>
  </div>
</template>

<script>
import School from "@/components/School";
export default {
  name: "App",
  components: { School },
  data() {
    return {
      msg: "欢迎学习Vue",
    };
  },
  methods: {
    showDOM() {
      console.log(this.$refs.sch);
    },
  },
};
</script>

<style></style>
