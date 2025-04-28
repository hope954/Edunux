<template>
    <div class="week">
        <el-row class="home" :gutter="20">
            <el-col :span="24">
                <!-- 第一个时间轴部分 -->
                <div class="timeline-box">
                    <el-timeline>
                        <el-timeline-item
                            v-for="(item, index) in timelineData1"
                            :key="index"
                            :color="item.color"
                            direction="horizontal"
                            @mouseenter="handleMouseEnter(1, index)"
                            @mouseleave="handleMouseLeave(1, index)"
                        >
                            <template #dot>
                                <i class="el-icon-clock"></i>
                            </template>
                            <div class="timeline-content" :class="{ 'hovered': hoveredIndex[1] === index }">
                                <p class="time">{{ item.time }}</p>
                                <p class="content">{{ item.content }}</p>
                            </div>
                        </el-timeline-item>
                    </el-timeline>
                </div>
                <!-- 第二个时间轴部分 -->
                <div class="timeline-box">
                    <el-timeline>
                        <el-timeline-item
                            v-for="(item, index) in timelineData2"
                            :key="index"
                            :color="item.color"
                            direction="horizontal"
                            @mouseenter="handleMouseEnter(2, index)"
                            @mouseleave="handleMouseLeave(2, index)"
                        >
                            <template #dot>
                                <i class="el-icon-clock"></i>
                            </template>
                            <div class="timeline-content" :class="{ 'hovered': hoveredIndex[2] === index }">
                                <p class="time">{{ item.time }}</p>
                                <p class="content">{{ item.content }}</p>
                            </div>
                        </el-timeline-item>
                    </el-timeline>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const timelineData1 = [
            { time: '典型案例分析', content: '明确现有创新创业课程教学的主要类型与关键特点，为本项目后续研究与探索提供经验借鉴。', color: '#800080' },
            { time: '新时期创新创业课程教学规律研究', content: '设计创新创业课程教学满意度评价模型与教学需求分析模型的整体框架，为本项目后续调查与研究提供理论支撑。', color: '#800080' },
            { time: '创新创业课程教学满意度调查研究', content: '进而形成创新创业课程教学满意度评价模型的具体内容，并采集相关信息，形成我校创新创业课程教学满意度现状调研报告。', color: '#800080' },
            { time: '创新创业课程教学需求调查研究', content: '形成创新创业课程教学!需求分析模型的具体内容，并采集相关信息，形成我校创新创业课程教学需求调研报告。', color: '#800080' },
            { time: '新时期创新创业课程教学改进方案规划', content: '规划新时期适合我校的创新创业课程教学改进方案探索进一步提升我校创新创业课程教学水平与教学效果的可行路径。', color: '#800080' }
        ];

        const timelineData2 = [
            { time: '典型案例分析阶段（2023年12月至2024年1月）', content: '搜集并研读创新创业课程教学典型案例，了解相关领域研究现状。预期阶段性成果：形成项目研究报告中“典型案例分析”部分初稿。', color: '#800080' },
            { time: '教学规律研究阶段（2024年2月至2024年3月）', content: '开展创新创业课程教学基本规律研究，明确课程定位与特点，界定核心概念内涵，设计模型整体框架。预期阶段性成果：形成项目研究报告中“教学规律研究”部分初稿。', color: '#800080' },
            { time: '满意度调研阶段（2024年4月至2024年6月）', content: '设计面向不同对象类型的调查问卷，开展网络调查、深度访谈与小组座谈，采集并分析相关数据，形成调研结论。预期阶段性成果：形成项目研究报告中“满意度调研”部分初稿；形成《创新创业课程教学满意度调查报告》。', color: '#800080' },
            { time: '需求调研阶段（2024年7月至2024年9月）', content: '设计面向不同对象类型的调查问卷，开展网络调查、深度访谈与小组座谈，采集并分析相关数据，形成调研结论。预期阶段性成果：形成项目研究报告中“需求调研”部分初稿；形成《创新创业课程教学需求调查报告》。', color: '#800080' },
            { time: '改进方案规划阶段（2024年10月至2024年11月）', content: '基于教学满意度与需求现状，综合考虑相关方面具体情况，规划教学改进方案。预期阶段性成果：形成项目研究报告中“改进方案规划”部分初稿；形成《创新创业课程教学改进方案》。', color: '#800080' },
            { time: '总结与优化阶段（2024年12月）', content: '总结前述各阶段研究成果，汇总形成项目研究报告初稿，征求相关专家意见与建议，优化完善后形成项目研究报告终稿。预期阶段性成果：《创新创业课程教学满意度及需求调查研究》项目研究报告。', color: '#800080' }
        ];

        const hoveredIndex = ref({ 1: -1, 2: -1 });

        const handleMouseEnter = (timelineIndex, index) => {
            hoveredIndex.value[timelineIndex] = index;
        };

        const handleMouseLeave = (timelineIndex) => {
            hoveredIndex.value[timelineIndex] = -1;
        };

        return {
            timelineData1,
            timelineData2,
            hoveredIndex,
            handleMouseEnter,
            handleMouseLeave
        };
    }
})
</script>

<style lang="less" scoped>
.home {
    margin: auto;
    text-align: center;
    display: flex;
    justify-content: center; /* 水平居中 */
}

.timeline-box {
    background: linear-gradient(to bottom, #ffe4e1, #e6e6fa);
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    text-align: center;
    width: 100%; /* 进一步缩小背景卡片宽度 */
    max-width: 500px; /* 最大宽度限制 */
    margin-left: auto;
    margin-right: auto; /* 水平居中 */
}

.el-timeline {
    margin: 0 auto; /* 水平居中 */
}

.el-timeline::before {
    background-color: #800080; /* 时间轴颜色改为深紫色 */
    width: 10px; /* 轴加粗显示 */
}

.el-timeline-item::before {
    content: '●'; /* 每个信息处添加圆点 */
    color: #800080;
    position: absolute;
    top: 20%;
    left: -10px;
    transform: translateY(-50%);
    font-size: 12px;
}

.timeline-content {
    text-align: center;
    transition: all 0.3s ease;
    width: 400px;
    word-wrap: break-word;
    white-space: normal;
}

.time {
    font-size: 18px;
    font-weight: bold; /* 字体加粗 */
    border-bottom: 1px solid #ccc; /* 下划线 */
    margin-bottom: 5px;
}

.content {
    font-size: 14px;
    color: #666;
}

.timeline-content.hovered {
    transform: scale(1.1);
    color: #800080;
}
</style>