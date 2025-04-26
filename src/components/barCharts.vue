<template>
    <div ref="chartRef" style="width: 300px; height: 400px;"></div>
  </template>
  
  <script>
  import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';
  import * as echarts from 'echarts';
  
  export default defineComponent({
    props: {
      chartData: {
        type: Array,
        default: () => []
      },
      chartLabels: {
        type: Array,
        default: () => []
      }
    },
    setup(props) {
      const chartRef = ref(null);
      let chartInstance = null;
  
      const initChart = () => {
        chartInstance = echarts.init(chartRef.value);
        const option = {
          xAxis: {
            type: 'category',
            data: props.chartLabels
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: props.chartData,
              type: 'bar'
            }
          ]
        };
        chartInstance.setOption(option);
      };
  
      onMounted(() => {
        initChart();
      });
  
      onBeforeUnmount(() => {
        if (chartInstance) {
          chartInstance.dispose();
        }
      });
  
      return {
        chartRef
      };
    }
  });
  </script>    