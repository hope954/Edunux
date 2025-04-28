<template>
    <div class="dashboard-container">
      <div class="header">
        <h1>互联网设备可视化平台</h1>
        <div class="time">{{ currentTime }}</div>
      </div>
  
      <div class="grid-container">
        <!-- 设备总览 -->
        <div class="grid-item">
          <el-card class="device-summary">
            <div id="app">
              <EchartsDemo />
            </div>
          </el-card>
        </div>
  
        <!-- 设备分布图 -->
        <div class="grid-item map-item">
          <el-card class="map">
            <div id="app">
              <ChinaMapDemo />
            </div>
          </el-card>
        </div>
  
        <!-- 报警次数 -->
        <div class="grid-item">
          <el-card class="charts">
            <div id="app" >
              <BarChart :chartData="[10, 20, 30, 40, 50]" :chartLabels="['A', 'B', 'C', 'D', 'E']" />
            </div>
          </el-card>
        </div>
  
        <!-- 用户总览 -->
        <div class="grid-item">
          <el-card class="charts">
            <div id="app">
              <LineChart :chartData="[15, 25, 35, 45, 55]" :chartLabels="['Mon', 'Tue', 'Wed', 'Thu', 'Fri']" />
            </div>
          </el-card>
        </div>
  
        <!-- 报警排名 -->
        <div class="grid-item">
          <el-card class="charts">
            <div id="app">
              <PieChart :chartData="[{ value: 30, name: 'A' }, { value: 70, name: 'B' }]" />
            </div>
          </el-card>
        </div>
  
        <!-- 设备提醒 -->
        <div class="grid-item">
          <el-card class="charts">
            <el-table :data="deviceRemindList" style="width: 100%">
              <el-table-column prop="id" label="设备ID"></el-table-column>
              <el-table-column prop="time" label="时间"></el-table-column>
              <el-table-column prop="status" label="状态" :formatter="formatStatus"></el-table-column>
              <el-table-column prop="address" label="地址"></el-table-column>
            </el-table>
          </el-card>
        </div>
  
        <!-- 安装计划 -->
      </div>
    </div>
  </template>
  
  <script>
    import { defineComponent, onMounted, onBeforeUnmount } from 'vue';
    import EchartsDemo from '../../components/EchartsDemo.vue';
    import ChinaMapDemo from '../../components/ChinaMapDemo.vue';
    import BarChart from '../../components/barCharts.vue';
    import LineChart from '../../components/lineCharts.vue';
    import PieChart from '../../components/pieCharts.vue';
    export default defineComponent({
  
      setup() {
  
      },
      name: 'App',
      components: {
        EchartsDemo,
        ChinaMapDemo,
        BarChart,
        LineChart,
        PieChart
      }
    });
  
  </script>
  
  <style scoped>
    .dashboard-container {
      background-color: #2A0D3B;
      color: white;
      padding: 20px;
    }
  
    .header {
      text-align: center;
      margin-bottom: 20px;
    }
  
    .time {
      float: right;
      font-size: 14px;
    }
  
    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 3fr));
      gap: 20px;
      background-color: #54306D;
    }
  
    .grid-item {
      height: auto;
      min-height: 300px;
      /* 可根据需要调整最小高度 */
  
      background-color: #623388;
    }
  
    .device-summary {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      background-color: #623388;
      border: #54306D;
      border-radius:20rpx;
    }
    .map{
      background-color: #623388;
      margin: 0 5px;
      border: #54306D;
      border-radius:20px;
    }
    .charts{
      background-color: #623388;
      border: #54306D;
      border-radius:20px;
    }
    .summary-item {
      /* background-color: #1a2c4e; */
      padding: 10px;
      border-radius: 8px;
      text-align: center;
      background-color: #623388;
      border: #54306D;
    }
  
    .value {
      font-size: 24px;
      margin-bottom: 5px;
    }
  
    .label {
      font-size: 14px;
      color: #8899b2;
    }
  
    .chart-container {
      height: 100%;
      width: 100%;
      background-color: #623388;
    }
  </style>