<template>
    <div class="dashboard-container">
      <div class="header">
        <!-- <h1 style="font-size:32px;font-weight:600;">双创满意度数据展示</h1> -->
        <!-- <div class="time">{{ currentTime }}</div> -->
        <!-- <img src="../../assets/image/mes.1.png" alt=""> -->
        <iframe width=1600 height=900 src="http://10.198.70.50:10000/danyhope954/" frameborder=0 allowfullscreen=true></iframe>
      </div>
    </div>
  </template>
  
  <script>
    import { defineComponent, onMounted, onBeforeUnmount } from 'vue';
    export default defineComponent({
  
      setup() {
  
      },
    });
  
  </script>
  
  <style scoped>
    /* .dashboard-container {
      /* background-color: #2A0D3B; 
      color: white;
      /* padding: 20px; 
    } */
  
    .header {
      text-align: center;
      margin-bottom: 20px;
    }
  </style>