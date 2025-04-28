<template>
    <div class="search">
        <div class="survey-intro">
            <p>您好，我们是西安电子科技大学“创新创业课程满意度及需求调查研究”大创项目组成员。非常感谢您参与本次满意度调查，本调查旨在了解您对《创业基础》课程的满意度情况，为进一步改进与优化课程教学方式、提升课程教学效果提供支撑。完成本调查大约需要15分钟。
            </p>
            <p>您的回答将完全保密。所有数据仅作研究之用。若对本调查有任何疑问或意见，请与我们联系，电话：15200182380，电子邮件：rtli8189@163.com。再次感谢您的支持与合作！</p>
            <p class="project-group">《创新创业课程满意度及需求调查研究》项目组</p>
            <p class="members">项目组成员：李睿彤、范怡雯、刘海桐。</p>
            <button @click="startSurvey" class="start-button">开始答题</button>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
    methods: {
        startSurvey() {
            // 使用路由名称跳转
            this.$router.push({ name: 'searchContent' });
        },
    },
}
</script>

<style lang="less">
/* 重置 body 样式，去除默认外边距和内边距 */
body {
    margin: 0;
    padding: 0;
    overflow-x: hidden; /* 防止水平溢出 */
}

.search {
    padding: 30px;
    max-width: 800px;
    margin: 0 auto;
    margin-top:50px;
    border-radius:15px;
    /* 使用默认字体 */
    background: linear-gradient(to bottom, #ffe4e1, #e6e6fa);
    min-height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.survey-intro {
    background-color: rgba(255, 255, 255, 0.8);
    border: none;
    border-radius: 20px;
    padding: 40px;
    line-height: 1.8;
    color: #333;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.survey-intro p {
    margin-bottom: 20px;
}

.project-group {
    font-weight: bold;
    color: #ff69b4;
}

.members {
    // font-style: italic;
    font-weight:600;
    color: #8a2be2;
}

.start-button {
    background-color: #ffb6c1;
    color: white;
    border: none;
    border-radius: 30px;
    padding: 15px 30px;
    font-size: 18px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    &:hover {
        background-color: #ff69b4;
        transform: translateY(-3px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    }

    &:active {
        transform: translateY(1px);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
}
</style>