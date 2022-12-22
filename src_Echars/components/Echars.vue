<template>
  <div>
    <div id="main" style="width: 600px;height: 400px" ref="main">

    </div>
    <button type="button" @click="show">点我显示图表</button>
  </div>

</template>

<script>
import * as echarts from 'echarts';

export default {
  name: "Echars",
  data() {
    return {
      myChart: null
    }
  },
  methods: {
    show() {
      this.myChart = echarts.init(this.$refs.main);
      this.myChart.setOption({
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
    }
  }
}

</script>
