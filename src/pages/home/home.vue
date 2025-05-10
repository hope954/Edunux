<template>
    <div class="dashboard-container">
        <!-- <h1 style="font-size:32px;font-weight:600;">双创满意度数据展示</h1> -->
        <!-- <div class="time">{{ currentTime }}</div> -->
        <!-- <img src="../../assets/image/mes.1.png" alt=""> -->
         <!-- 需要打开山海鲸才能访问，还没有托管到云服务上 -->
        <iframe width=1600 height=900 src="http://localhost:10000/zucpuakeit2s/" frameborder=0 allowfullscreen=true></iframe>
        <!-- <iframe width=1600 height=900 src="http://10.198.70.50:10000/danyhope954/" frameborder=0 allowfullscreen=true></iframe> -->
        <!-- 这个是托管的版本可以直接在线访问https://hosting.shanhaibi.com/n24etvcglz7i/ -->
        <!-- <iframe width=1600 height=900 src="https://hosting.shanhaibi.com/n24etvcglz7i/" frameborder=0 allowfullscreen=true></iframe> -->
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
    .dashboard-container {
      margin: 0 auto; 
      width: 1600px;
    }
  </style>