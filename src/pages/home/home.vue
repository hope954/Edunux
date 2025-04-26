<template>
    <div>
        <el-row class="home" :gutter="20">
            <el-col :span="8">
                <div id="app">
                    <ChinaMapDemo />
                </div>
                <el-card shadow="hover">
                    <div class="user">
                        <img src="../../assets/image/user.png" alt="">
                        <div class="userinfo">
                            <p class="name">admin</p>
                            <p class="role">超级管理院</p>
                        </div>
                    </div>
                    <div class="login-info">
                        <p>时间<span>2025-4-01</span></p>
                        <p>地点<span>西安</span></p>

                    </div>
                </el-card>
                <el-card shadow="hover" style="margin-top: 20px; height: 450px;">
                    <el-table :data="tableData">
                        <el-table-column v-for="(val, key) in tableLabel" :key="key" :prop="key" :label="val">

                        </el-table-column>
                    </el-table>
                </el-card>
                <div id="app">
                    <EchartsDemo />
                </div>
            </el-col>
            <el-col :span="16"></el-col>
        </el-row>
    </div>
</template>

<script>
    import { progressProps } from 'element-plus';
    import { defineComponent } from 'vue';
    import EchartsDemo from '../../components/EchartsDemo.vue';
    import ChinaMapDemo from '../../components/ChinaMapDemo.vue';
    export default defineComponent({
        setup() {
            const tableData = [
                {
                    name: "Java",
                    todayBuy: 100,
                    monthBuy: 200,
                    totalBuy: 300,
                },
                {
                    name: "Python",
                    todayBuy: 100,
                    monthBuy: 200,
                    totalBuy: 300,
                }
            ];
            const tableLabel = {
                name: "课程",
                todayBuy: "今日购买",
                monthBuy: "本月购买",
                totalBuy: "总购买",
            };
            return {
                tableData,
                tableLabel,
            };
        },
        name: 'App',
        components: {
            EchartsDemo,
            ChinaMapDemo
        }
    });
</script>
<style lang="less" scoped>
    .home {
        .user {
            display: flex;
            align-items: center;
            padding-bottom: 20px;
            border-bottom: 1px solid #ccc;
            margin-bottom: 20px;

            img {
                width: 150px;
                height: 150px;
                border-radius: 50%;
                margin-right: 40px;
            }
        }

        .login-info {
            p {
                line-height: 30px;
                font-size: 14px;
                color: #999;

                span {
                    color: #666;
                    margin-left: 60px;

                }
            }
        }
    }
</style>