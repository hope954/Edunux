<template>
    
    <div class="common-layout">
      <el-container class="lay-container">
        
        <el-aside style="--el-aside-width:1000px:"><common-aside /></el-aside>
        <el-container class="r-container">
          <el-header style="padding-left: 0; padding-right: 0;">
            <common-header />
          </el-header>
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
import CommonAside from "../components/CommonAside.vue";
export default defineComponent({
    components:{
        CommonHeader,
        CommonAside
    },
})
</script>
<style lang="less" scoped>
.r-container{
  flex-wrap: wrap;
}
.common-layout{
  height: 100%;
  width: 100%;
  & > .el-container{
    height: 100%;
    width: 100%;
    & > .el-aside{
      height: 100%; 
    }
  }
}
</style>