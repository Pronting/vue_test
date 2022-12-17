<template>
  <div class="demo">
    <!-- 组件的结构 -->
    <h1>{{ msg }}</h1>
    <h2>学生姓名: {{ name }}</h2>
    <h2>学生姓名: {{ sex }}</h2>
    <h2>学生年龄:{{ myAge }}</h2>
    <button @click="updateAge">尝试修改收到的年龄</button>
  </div>
</template>

<script>
export default {
  name: "MyStudent",
  data() {
    return {
      msg: "我是一个学生",
      myName: this.name,
      mySex: this.sex,
      myAge: this.age,

    };
  },
  // props: ["name", "sex", "age"],
  //  接收的同时对数据进行类型限制
  /* props:{
      name:String,
      age:Number,
      sex:String
  } */

  props: {
    name: {
      type: String,
      required: true, //! 名字是必要的
    },
    age: {
      type: Number,
      default: 99, // !默认的
    },
    sex: {
      type: String,
      required: true, //! 必要的
    },
  },
  methods: {
    updateAge() {
      this.myAge++;
    },
  },
};
//  组件的交互代码(数据方法等)
</script>

<style lang="postcss" scoped>
/* 组件的样式 */
.demo {
  background-color: pink;
}
</style>
