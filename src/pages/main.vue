<template>
    
    <div class="common-layout">
      <el-container>
        <el-header>Header</el-header>
        <el-container>
          <el-aside width="200px">Aside</el-aside>
          <common-header />
          <el-main>
            <router-view /> 
          </el-main> 
        </el-container>
      </el-container>
    </div>
    
  </template>
  
<script>
import { defineComponent } from "vue";
import CommonHeader from '../components/CommonHeader.vue'
export default defineComponent({
    components:{
        CommonHeader
    },
})
</script>