<template>
    
    <div class="common-layout">
      <el-container>
        <common-aside />
        <el-container>
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
import CommonAside from "../components/CommonAside.vue";
export default defineComponent({
    components:{
        CommonHeader,
        CommonAside
    },
})
</script>
<style lang="less">
@media (max-width: 768px) {
  .el-container {
    flex-direction: column;
  }

  .el-aside {
    width: 100%;
    min-width: auto;
  }
}
.el-container{
  flex-wrap: wrap;
  align-items: flex-start;
  overflow: auto;
}
.common-layout{
  // overflow: scroll;//给页面增加滚动条，但样式上不够美观，在排查页面不能下拉的过程中添加用于测试的
  // height: 100%;
  // width: 100%;
  & > .el-container{
    // height: 100%;
    // width: 100%;
    & > .el-aside{
      // height: 100%; 
      background-color: #545c64;
    }
  }
}
</style>