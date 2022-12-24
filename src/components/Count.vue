<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h1>当前求和放大10倍为{{ bigSum }}</h1>
    <h3>我在{{ school }} 学习{{ subject }}</h3>
    <h3 style="color: red">下方组件的总人数是:{{ personList.length }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="JIA(n)">+</button>
    <button @click="JIAN(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

export default {
  name: 'Count',
  data() {
    return {
      n: 1, //用户选择的数字
    }
  },
  computed: {
    ...mapState('countOptions',['sum','school','subject']),
    ...mapState('personOptions',['personList']),
    ...mapGetters('countOptions',['bigSum'])
  },
  methods: {
    //对象写法
    // ...mapMutations({increment:'JIA', decrement: 'JIAN'}),
    //数组写法
    ...mapMutations('countOptions',['JIA','JIAN']),
    ...mapActions('countOptions',{incrementOdd:'JIAODD',incrementWait:'JIAWAIT'})

  },
  mounted(){
    console.log(this.$store)
  }
}
</script>

<style lang="css">
button {
  margin-left: 5px;
}
</style>
