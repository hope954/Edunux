<template>
    <div class="result-container">
      <h1>问卷结果</h1>
      <p>你的问卷得分是: {{ score }}</p>
      <p>{{ getFeedback(score) }}</p>
      <div id="chart" style="width: 100%; height: 400px;"></div>
      <!-- <el-button @click="goBack" type="info" size="medium">返回问卷</el-button> -->
    </div>
  </template>
  
  <script setup>
  import { defineProps, onMounted, ref } from 'vue';
  import { ElButton } from 'element-plus';
  import { useRouter } from 'vue-router';
  import * as echarts from 'echarts';

  const props = defineProps({
    score: {
      type: Number,
      required: true
    },
    answers: {
      type: Array,
      required: true
    }
  });
  
  const router = useRouter();
  
  const getFeedback = (score) => {
    if (score <= 96) {
      return '你好像对创新创业教育很不满意呢，请你提出意见，我们一定认真考虑改良！';
    } else if (score <= 144) {
      return '你好像对创新创业教育不太满意呢，欢迎您提出宝贵意见！';
    } else {
      return '你对创新创业教育非常满意呢，谢谢你参与我们的量表调查！';
    }
  };
  
//   const goBack = () => {
//     router.go(-1);
//   };
  
  onMounted(() => {
    const chartDom = document.getElementById('chart');
    const myChart = echarts.init(chartDom);
    const option = {
      xAxis: {
        type: 'category',
        data: props.answers.map((_, index) => `问题${index + 1}`)
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: props.answers,
          type: 'bar'
        }
      ]
    };
    myChart.setOption(option);
  });
  </script>
  
  <style scoped>
  .result-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
    text-align: center;
  }
  
  h1 {
    font-size: 28px;
    margin-bottom: 20px;
  }
  
  p {
    margin-bottom: 10px;
  }
  
  #chart {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  
  .el-button {
    margin-top: 20px;
  }
  </style>