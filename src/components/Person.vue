<template>
  <div>
    <h1>人员列表</h1>
    <h3>列表中第一个人的名字是{{ firstPersonName }}</h3>
    <input type="text" placeholder="请输入名字" v-model="name"/>
    <button @click="add">添加</button>
    <button @click="addWang">添加一个姓王的人</button>
    <button @click="addPersonServer">添加一个人，名称随机</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
    <h3>Count组件的求和为{{ sum }}</h3>


  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from 'vuex'
import {nanoid} from 'nanoid';

export default {
  name: "Person",
  data() {
    return {
      name: ''
    }
  },
  computed: {
    ...mapState('personOptions', ['personList']),
    ...mapState('countOptions', ['sum']),
    firstPersonName() {
      return this.$store.getters["personOptions/firstPersonName"]
    }
  },
  methods: {
    add() {
      const personObj = {id: nanoid(), name: this.name}
      this.name = "";
      this.$store.commit('personOptions/ADD_PERSON', personObj)
      console.log("成功添加一位person")
    },
    addWang() {
      const personObj = {id: nanoid(), name: this.name};
      this.$store.dispatch("personOptions/addPersonWang", personObj);
      this.name = "";
    },
    addPersonServer(){
      this.$store.dispatch("personOptions/addPersonServer")
    }

  }
}
</script>

<style scoped>

</style>