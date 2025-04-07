<template>
    <div class="week">
        <el-row class="home" :gutter="20">
        <el-col :span="20" >
            <el-card shadow="hover">
                <div class="user">
                    <img src="../../assets/image/week.png" alt="">
                    <!-- <div class="userinfo">
                        <p class="name">admin</p>
                        <p class="role">超级管理院</p>
                    </div> -->
                </div>
                <!-- <div class="login-info">
                    <p>时间<span>2025-4-01</span></p>
                    <p>地点<span>西安</span></p>
                    
                </div> -->
            </el-card>
            <!-- <el-card shadow="hover" style="margin-top: 20px; height: 450px;">
                <el-table :data="tableData">
                    <el-table-column
                    v-for="(val,key) in tableLabel" :key="key" :prop="key" :label="val">

                    </el-table-column>
                </el-table>
            </el-card> -->
        </el-col>
        <el-col :span="40" ></el-col>
    </el-row>
    </div>
    
</template>

<script>
import { progressProps } from 'element-plus';
import { defineComponent } from 'vue';
export default defineComponent({

})
</script>
<style lang="less" scoped>

</style>