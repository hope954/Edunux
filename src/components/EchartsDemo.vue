<template>
    <div>
      <!-- 定义一个容器用于显示 ECharts 图表 -->
      <div id="main" style="width: 600px;height:400px;"></div>
    </div>
  </template>
  
  <script>
  import * as echarts from 'echarts';
  
  export default {
    name: 'EchartsDemo',
    mounted() {
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(document.getElementById('main'));
  
      // 指定图表的配置项和数据
      const option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
          }
        ]
      };
  
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  };
  </script>    