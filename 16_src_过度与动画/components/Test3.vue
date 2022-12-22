<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group
        appear
        name="animate__animated animate__bounce"
        enter-active-class="animate__bounce"
        leave-active-class="animate__rotateOut"
        >
      <h1 v-show="isShow" key="1">Animate</h1>
      <h1 v-show="isShow" key="2">css第三方库</h1>
    </transition-group>
  </div>
</template>

<script>
import 'animate.css'
export default {
  name: "Test2",
  data() {
    return {
      isShow: true
    }
  }
}
</script>

<style scoped>
h1 {
  background: orange;
}
</style>