<template>
    <div class="week">
        <el-row class="home" :gutter="20">
            <el-col :span="20">
                <div v-for="image in images">
                    <img :src="image" alt="" height="500" loading="lazy" />
                </div>
                <img src="../../assets/image/week.png" alt="">
                <!-- 时间轴部分 -->
                <div class="timeline-box">
                    <el-timeline>
                        <el-timeline-item
                            v-for="(item, index) in timelineData"
                            :key="index"
                            :color="item.color"
                        >
                            <template #dot>
                                <i class="el-icon-clock"></i>
                            </template>
                            <div class="timeline-content">
                                <p>{{ item.time }}</p>
                                <p>{{ item.content }}</p>
                            </div>
                        </el-timeline-item>
                    </el-timeline>
                </div>
            </el-col>
            <el-col :span="40"></el-col>
        </el-row>
    </div>
</template>

<script>
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

        const timelineData = [
            { time: '2025-04-01', content: '事件 1', color: '#ff69b4' },
            { time: '2025-04-02', content: '事件 2', color: '#87cefa' },
            { time: '2025-04-03', content: '事件 3', color: '#98fb98' }
        ];

        return {
            images: [...imageArr],
            timelineData
        };
    }
})
</script>

<style lang="less" scoped>
.home {
    margin: auto;
    text-align: center;
}

.timeline-box {
    background: linear-gradient(to bottom, #ffe4e1, #e6e6fa);
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    text-align: center;
    display: inline-block;
}

.timeline-content {
    text-align: left;
}
</style>