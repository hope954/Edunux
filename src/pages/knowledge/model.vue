<!-- <template>
    <div>我是理论模型啦啦啦</div>
    
</template>

<script>
export default{

}
</script>
<style lang="less" >
</style> 在谷歌浏览器中不兼容，在egde内可以打开-->/
<template>
    <div>
      <el-row :gutter="20">
        <el-col :span="24">
          <el-card>
            <template #header>
              <div>地图 - 不同地区问卷收集情况</div>
            </template>
            <div id="map-chart" style="width: 100%; height: 400px;"></div>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="margin-top: 20px;">
        <el-col :span="12">
          <el-card>
            <template #header>
              <div>折线图 - 数据随时间变化趋势</div>
            </template>
            <div id="line-chart" style="width: 100%; height: 400px;"></div>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card>
            <template #header>
              <div>柱状图 - 不同类别数据比较</div>
            </template>
            <div id="bar-chart" style="width: 100%; height: 400px;"></div>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="margin-top: 20px;">
        <el-col :span="24">
          <el-card>
            <template #header>
              <div>饼图 - 各部分数据占比</div>
            </template>
            <div id="pie-chart" style="width: 100%; height: 400px;"></div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </template>
  
  <script>
  import * as echarts from 'echarts';
  import chinaJson from 'echarts/map/json/china.json';
// 注册中国地图
echarts.registerMap('china', chinaJson);
  
  export default {
    name: 'VisualizationDashboard',
    mounted() {
      this.initMapChart();
      this.initLineChart();
      this.initBarChart();
      this.initPieChart();
    },
    methods: {
      initMapChart() {
        const myChart = echarts.init(document.getElementById('map-chart'));
        const data = [
          { name: '北京', value: 120 },
          { name: '天津', value: 80 },
          { name: '河北', value: 150 },
          { name: '山西', value: 90 },
          { name: '内蒙古', value: 60 },
          { name: '辽宁', value: 110 },
          { name: '吉林', value: 70 },
          { name: '黑龙江', value: 85 },
        ];
        const option = {
          title: {
            text: '不同地区问卷收集情况',
            left: 'center'
          },
          tooltip: {
            trigger: 'item'
          },
          visualMap: {
            min: 0,
            max: 200,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'],
            calculable: true
          },
          series: [
            {
              name: '问卷数量',
              type: 'map',
              map: 'china',
              data: data
            }
          ]
        };
        myChart.setOption(option);
      },
      initLineChart() {
        const myChart = echarts.init(document.getElementById('line-chart'));
        const option = {
          xAxis: {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line'
            }
          ]
        };
        myChart.setOption(option);
      },
      initBarChart() {
        const myChart = echarts.init(document.getElementById('bar-chart'));
        const option = {
          xAxis: {
            type: 'category',
            data: ['苹果', '香蕉', '橙子', '葡萄', '草莓']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [50, 60, 70, 80, 90],
              type: 'bar'
            }
          ]
        };
        myChart.setOption(option);
      },
      initPieChart() {
        const myChart = echarts.init(document.getElementById('pie-chart'));
        const option = {
          series: [
            {
              type: 'pie',
              radius: '50%',
              data: [
                { value: 335, name: '直接访问' },
                { value: 310, name: '邮件营销' },
                { value: 234, name: '联盟广告' },
                { value: 135, name: '视频广告' },
                { value: 1548, name: '搜索引擎' }
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
  
  </style>    