<template>
  <li>
    <label>
      <input type="checkbox" :checked = 'todoObj.done' @change="handleCheck(todoObj.id)"/>
          <!--   如下代码也能实现功能，但是不太推荐，以内有点违反原则，因为了修改了props    -->
<!--      <input type="checkbox" v-model="todoObj.done"/>-->
      <span>{{ todoObj.title }}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todoObj.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: 'MyItem',
  //生命接受todo对象
  props:['todoObj','checkTodo','deleteTodo'],
  methods:{
    //数据在哪里，操作数据的方法就在哪里
    handleCheck(id){
      //todo状态取反
      this.checkTodo(id);
    },
    //删除
    handleDelete(id) {
      if(confirm("确定删除吗？")){
      //  通知app，删除
        this.deleteTodo(id);
      }
    }
  }
}
</script>

<style scoped>

/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover{
  background: #cccccc;
}
li:hover button{
  display: block;
}



</style>