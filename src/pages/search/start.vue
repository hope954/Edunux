<template>
    <div id="search">
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
    #search {
        padding: 20px;
        max-width: 800px;
        margin: 0 auto;
        font-family: Arial, sans-serif;
    }

    .survey-intro {
        background-color: #f9f9f9;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        padding: 20px;
        line-height: 1.6;
        color: #333;
    }

    .survey-intro p {
        margin-bottom: 15px;
    }

    .project-group {
        font-weight: bold;
    }

    .members {
        font-style: italic;
    }

    .start-button {
        background-color: #007BFF;
        color: white;
        border: none;
        border-radius: 4px;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #0056b3;
        }
    }
</style>