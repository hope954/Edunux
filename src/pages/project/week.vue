<template>
    <div class="week">
        <el-row class="home" :gutter="20">
            <el-col :span="20">
                <div v-for="image in images">
                        <img :src="image" alt="" height="500" loading="lazy" />
                </div>
                        <img src="../../assets/image/week.png" alt="">
                <!-- <el-card shadow="hover">
                    <div class="user">
                        
                        <div class="userinfo">
                        <p class="name">admin</p>
                        <p class="role">超级管理院</p>
                    </div> 
                    </div>

                    <<div class="login-info">
                    <p>时间<span>2025-4-01</span></p>
                    <p>地点<span>西安</span></p>
                    
                </div> 
                </el-card> -->
                
                <!-- <el-card shadow="hover" style="margin-top: 20px; height: 450px;">
                <el-table :data="tableData">
                    <el-table-column
                    v-for="(val,key) in tableLabel" :key="key" :prop="key" :label="val">

                    </el-table-column>
                </el-table>
            </el-card> -->
            </el-col>
            <el-col :span="40"></el-col>
        </el-row>
    </div>

</template>

<script>
import { progressProps } from 'element-plus';
import { defineComponent } from 'vue';
export default defineComponent({
    setup() {
        const imageArr = new Array(22)
            .fill("")
            .map((_image, idx) => {
                try {
                    // 使用 new URL 导入图片
                    return new URL(`./imgs/demo(${idx + 1}).png`, import.meta.url).href;
                } catch (error) {
                    console.error(`Failed to load image: demo(${idx + 1}).png`, error);
                    return '';
                }
            });
            // ((_image, idx) => `./imgs/demo(${idx + 1}).png`);
        return {
            images: [...imageArr],
        };
    }
})
</script>
<style lang="less" scoped>
.home{
    margin: auto;
    text-align: center;
}
</style>