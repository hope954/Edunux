<template>
    <div class="home-page">
        <el-row class="home" :gutter="20">
            <el-col :span="8">
                <div id="app">
                    <EchartsDemo />
                </div>
            </el-col>
            <el-col :span="8">
                <div id="app">
                    <ChinaMapDemo />
                </div>
            </el-col>
            <el-col :span="8">
                <div class="chart-container" id="pie-chart"></div>
            </el-col>
        </el-row>
        <!-- 第二行 -->
        <el-row :gutter="20" style="margin-top: 20px;">
            <el-col :span="8">
                <div id="app">
                    <BarChart :chartData="[10, 20, 30, 40, 50]" :chartLabels="['A', 'B', 'C', 'D', 'E']" />
                </div>

            </el-col>
            <el-col :span="8">
                <div id="app">
                    <LineChart :chartData="[15, 25, 35, 45, 55]" :chartLabels="['Mon', 'Tue', 'Wed', 'Thu', 'Fri']" />
                </div>

            </el-col>
            <el-col :span="8">
                <div id="app">
                    <PieChart :chartData="[{ value: 30, name: 'A' }, { value: 70, name: 'B' }]" />
                </div>

            </el-col>
        </el-row>
    </div>
</template>



<script>
    import { progressProps } from 'element-plus';
    // import { defineComponent } from 'vue';
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
<style lang="less" scoped>
    .home-page {

        background-image: url('../../assets/image/backgroud1.jpg');
        width: auto;
        /* 自动调整宽度 */
        height: auto;
        /* 自动调整高度 */
        min-width: 1000px;
        /* 设置最小宽度 */
        min-height: 600px;
        /* 设置最小高度 */
        // display: flex;
        justify-content: center;
        align-items: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    


</style>