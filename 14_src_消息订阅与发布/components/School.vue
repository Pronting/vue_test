<template>
	<div class="school">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
		<button @click="sendSchoolName">把学校名给App</button>
	</div>
</template>

<script>
import pubsub from 'pubsub-js';
	export default {
		name:'School',
		props:['getSchoolName'],
		data() {
			return {
				name:'尚硅谷',
				address:'北京',
			}
		},
		methods: {
			sendSchoolName(){
				this.getSchoolName(this.name)
			}
		},

    mounted() {
      this.pubId = pubsub.subscribe('hello', (msgName, data) => {
        console.log(this)
        // console.log("有人发布了Hello消息，hello消息的回调执行了", msgName, data);
      });
    },
    beforeDestroy(){
		  pubsub.unsubsribe(this.pubId);
    }
  }
</script>

<style scoped>
	.school{
		background-color: skyblue;
		padding: 5px;
	}
</style>