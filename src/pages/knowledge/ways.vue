<!-- <template>
    <div>我是方法啦啦啦</div>
    
</template>

<script>
export default{

}
</script>
<style lang="less">
</style> -->
<template>
    <div class="data-dashboard">
      <!-- 顶部信息栏 -->
      <div class="top-info">
        <span>大数据可视化展板通用模板</span>
        <span>2020年1月21 - 15时43分29秒</span>
      </div>
      <!-- 中间内容区域 -->
      <div class="middle-content">
        <!-- 收入支出图表区域 -->
        <div class="income-expense-chart">
          <h2 class="module-title">模块标题样式</h2>
          <div class="data-numbers">
            <span>12581189</span>
            <span>3912410</span>
          </div>
          <div class="chart-labels">
            <span>2018年总收入情况</span>
            <span>2018年总支出情况</span>
          </div>
          <div id="income-expense-bar-chart"></div>
        </div>
        <!-- 地区相关图表区域 -->
        <div class="region-chart">
          <h2 class="module-title">模块标题样式</h2>
          <div id="region-bar-chart"></div>
        </div>
        <!-- 分布图表区域 -->
        <div class="distribution-charts">
          <div class="single-distribution-chart">
            <h2 class="module-title">年龄分布</h2>
            <div id="age-pie-chart"></div>
          </div>
          <div class="single-distribution-chart">
            <h2 class="module-title">职业分布</h2>
            <div id="occupation-pie-chart"></div>
          </div>
          <div class="single-distribution-chart">
            <h2 class="module-title">兴趣分布</h2>
            <div id="interest-pie-chart"></div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import * as echarts from 'echarts';
  
  export default {
    mounted() {
      this.initIncomeExpenseChart();
      this.initRegionChart();
      this.initAgeChart();
      this.initOccupationChart();
      this.initInterestChart();
    },
    methods: {
      initIncomeExpenseChart() {
        const chartDom = document.getElementById('income-expense-bar-chart');
        const myChart = echarts.init(chartDom);
        const option = {
          xAxis: {
            type: 'category',
            data: ['商招门店', '教育培训', '房地产', '生活服务', '汽车销售', '旅游酒店', '五金建材']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '2018年总收入',
              data: [1500, 1200, 900, 600, 300, 0, 0],
              type: 'bar'
            },
            {
              name: '2018年总支出',
              data: [0, 0, 0, 0, 0, 0, 0],
              type: 'bar'
            }
          ]
        };
        myChart.setOption(option);
      },
      initRegionChart() {
        const chartDom = document.getElementById('region-bar-chart');
        const myChart = echarts.init(chartDom);
        const option = {
          xAxis: {
            type: 'category',
            data: ['浙江', '上海', '江苏', '广东', '北京', '深圳', '安徽', '四川']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '数据',
              data: [1500, 1200, 900, 600, 300, 0, 0, 0],
              type: 'bar'
            }
          ]
        };
        myChart.setOption(option);
      },
      initAgeChart() {
        const chartDom = document.getElementById('age-pie-chart');
        const myChart = echarts.init(chartDom);
        const option = {
          series: [
            {
              type: 'pie',
              data: [
                { value: 30, name: '0 - 19岁' },
                { value: 20, name: '20 - 29岁' },
                { value: 25, name: '30 - 39岁' },
                { value: 15, name: '40 - 49岁' },
                { value: 10, name: '50岁以上' }
              ]
            }
          ]
        };
        myChart.setOption(option);
      },
      initOccupationChart() {
        const chartDom = document.getElementById('occupation-pie-chart');
        const myChart = echarts.init(chartDom);
        const option = {
          series: [
            {
              type: 'pie',
              data: [
                { value: 25, name: '电子商务' },
                { value: 20, name: '教育' },
                { value: 15, name: '汽车' },
                { value: 10, name: '旅游' },
                { value: 10, name: '财经' },
                { value: 10, name: 'IT/互联网' },
                { value: 5, name: '金融' },
                { value: 5, name: '教育软件' },
                { value: 10, name: '其他' }
              ]
            }
          ]
        };
        myChart.setOption(option);
      },
      initInterestChart() {
        const chartDom = document.getElementById('interest-pie-chart');
        const myChart = echarts.init(chartDom);
        const option = {
          series: [
            {
              type: 'pie',
              data: [
                { value: 30, name: '学生' },
                { value: 70, name: '其他' }
              ]
            }
          ]
        };
        myChart.setOption(option);
      }
    }
  };
  </script>
  
  <style scoped>
  .data-dashboard {
    font-family: Arial, sans-serif;
    padding: 20px;
  }
  
  .top-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  
  .middle-content {
    display: flex;
    justify-content: space-between;
  }
  
  .income-expense-chart,
  .region-chart,
  .distribution-charts {
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 20px;
  }
  
  .module-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .data-numbers {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  
  .chart-labels {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  
  .distribution-charts {
    display: flex;
    flex-direction: column;
    width: 30%;
  }
  
  .single-distribution-chart {
    margin-bottom: 20px;
  }
  </style>