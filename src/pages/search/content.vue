<template>
  <div class="survey-container">
    <h1 style="font-weight: 600; margin-bottom: 50px;">调查问卷</h1>
    <div v-for="(question, index) in questions" :key="index" class="question-item" :style="{ backgroundColor: isQuestionAnswered[index] ? 'rgba(255, 228, 225, 0.8)' : '#fff' }">
      <p>{{ question.question }}</p>
      <el-radio-group v-model="answers[index]" size="large" @change="onAnswerChange(index)">
        <el-radio :label="i" v-for="i in 5" :key="i" size="large">
          {{ i }} 分
        </el-radio>
      </el-radio-group>
    </div>
    <el-button @click="submitSurvey" type="primary" size="large">提交问卷</el-button>
    <div v-if="isSubmitted" class="score-modal">
      <div class="score-content" >
        <p>你的问卷得分是: {{ calculateScore }}</p>
        <p style="margin: 10px;">{{ getFeedback(calculateScore) }}</p>
        <el-button @click="closeModal" type="info" size="medium">关闭</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { ElRadioGroup, ElRadio, ElButton } from 'element-plus';

// 定义调查问卷问题
const questions = ref([
  {
    question: '2.1课程性质是必修课是合适的。'
  },
  {
    question: '2.2课程适合于在大二学年开设。'
  },
  {
    question: '2.3课程目标与个人发展目标相契合。'
  },
  {
    question: '2.4课程目标与课程内容高度相符。'
  },
  {
    question: '2.5任课教师能够公布课程教学计划（如课堂活动、章节测验、课后作业等）。'
  },
  {
    question: '2.6本课程内容较为充实。'
  },
  {
    question: '2.7本课程内容框架严谨、体系完整。'
  },
  {
    question: '2.8本课程内容涉及相关领域理论与实践前沿。'
  },
  {
    question: '2.9本课程内容科学性较高。'
  },
  {
    question: '2.10本课程内容模块划分清晰合理。'
  },
  {
    question: '2.11本课程内容涉及多个学科的相关知识。'
  },
  {
    question: '2.12本课程适合于采用团队授课方式。'
  },
  {
    question: '2.13本课程适合于采用单人授课方式。'
  },
  {
    question: '2.14本课程具有多样化的考核方式。'
  },
  {
    question: '2.15本课程考核构成划分清晰、占比合理。'
  },
  {
    question: '2.16本课程的考核兼顾过程与结果，注重知识掌握与能力提升。'
  },
  {
    question: '3.1授课中使用了与课程内容高度吻合、设计精美的PPT。'
  },
  {
    question: '3.2设置有与课程内容相吻合、类型多样的创新创业案例。'
  },
  {
    question: '3.3录制有与课程内容相关、制作精良的知识点视频。'
  },
  {
    question: '3.4设置有伴随教学进度、难度适中的章节测试。'
  },
  {
    question: '3.5使用了与课程内容相关、精美新颖的课程教具。'
  },
  {
    question: '3.6有数量充足、满足教学需求的教室。'
  },
  {
    question: '3.7有功能强大、运行稳定的课程平台。'
  },
  {
    question: '3.8有数量充足、获取便捷、满足需求的智慧教室。'
  },
  {
    question: '3.9校内设有空间宽敞、设备齐备、环境优美的实践基地。'
  },
  {
    question: '3.10校外设有数量充足、贴近市场与企业实际的实践基地。'
  },
  {
    question: '3.11能够获取到数量充足、形式多样的创新创业相关资料。'
  },
  {
    question: '3.12能够引入数量充足、经验丰富的企业导师。'
  },
  {
    question: '3.13能够举办数量充足、形式多样的创新创业活动（如创业沙龙、创新讲座等）。'
  },
  {
    question: '3.14能够举办数量充足、形式多样的创新创业竞赛（如星火杯、挑战杯、互联网+等）。'
  },
  {
    question: '4.1任课教师能够按时发布课前预习资料。'
  },
  {
    question: '4.2任课教师能够提前对下一章节教学进行简要概述。'
  },
  {
    question: '4.3任课教师能够提前提供教学大纲。'
  },
  {
    question: '4.4任课教师知识储备丰富、授课思路清晰、系统性强。'
  },
  {
    question: '4.5任课教师能够做到理论知识与实践案例紧密结合。'
  },
  {
    question: '4.6任课教师能够组织一定数量、形式多样、效果良好的课堂互动。'
  },
  {
    question: '4.7任课教师能够综合运用多种教学方式（如案例教学、情景教学、翻转课堂、项目教学等）。'
  },
  {
    question: '4.8任课教师遵守教学规范，授课过程严谨。'
  },
  {
    question: '4.9任课教师能够对学生自学过程中的疑问及时给予解答指导。'
  },
  {
    question: '4.10任课教师能够监督学生学情，及时提醒学生学习进度。'
  },
  {
    question: '4.11任课教师能够引导学生进行拓展学习。'
  },
  {
    question: '4.12任课教师能够对学生创新创业活动进行指导。'
  },
  {
    question: '4.13通过学习，我树立了正确的人生观、价值观及创业观。'
  },
  {
    question: '4.14通过学习，我对创新创业相关理论知识体系有了更加系统、深入的认知。'
  },
  {
    question: '4.15通过学习，我塑造了良好的创新思维模式与创业行为方式。'
  },
  {
    question: '4.16通过学习，我掌握了更加全面的创新创业相关技术、方法与技能、技巧。'
  },
  {
    question: '4.17通过学习，我提高了参加创新创业竞赛、活动与实践的意愿和积极性。'
  },
  {
    question: '4.18通过学习，我形成了一定数量、质量的相关成果（如产品、论文、获奖、专利等）。'
  }
]);

// 存储用户答案
const answers = ref(new Array(questions.value.length).fill(null));

// 标记是否提交问卷
const isSubmitted = ref(false);

// 标记每个问题是否已回答
const isQuestionAnswered = ref(new Array(questions.value.length).fill(false));

// 计算得分
const calculateScore = computed(() => {
  let totalScore = 0;
  answers.value.forEach((answer) => {
    if (answer!== null) {
      totalScore += answer;
    }
  });
  console.log('Calculated Score:', totalScore);
  return totalScore;
});

// 根据得分获取反馈信息
const getFeedback = (score) => {
  if (score <= 96) {
    return '你好像对创新创业教育很不满意呢，请你提出意见，我们一定认真考虑改良！';
  } else if (score <= 144) {
    return '你好像对创新创业教育不太满意呢，欢迎您提出宝贵意见！';
  } else {
    return '你对创新创业教育非常满意呢，谢谢你参与我们的量表调查！';
  }
};

// 提交问卷方法
const submitSurvey = () => {
  console.log('Answers:', answers.value);
  isSubmitted.value = true;
};

// 关闭模态框方法
const closeModal = () => {
  try {
    console.log('尝试关闭模态框,当前 isSubmitted 的值:', isSubmitted.value);
    isSubmitted.value = false;
    console.log('关闭模态框后,isSubmitted 的值:', isSubmitted.value);
  } catch (error) {
    console.error('关闭模态框时发生错误:', error);
  }
};

// 答案改变时的处理方法
const onAnswerChange = (index) => {
  isQuestionAnswered.value[index] = true;
};
</script>

<style scoped>
.survey-container {
  color:#333;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  font-size: 28px;
  text-align: center;
  margin-bottom: 20px;
}

.question-item {
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 5px;
  background-color: #fff; /* 这里也可以统一设置为白色，不过动态样式已经设置了，这里可以不写 */
  transition: box-shadow 0.3s ease; /* 为悬浮效果添加过渡动画 */
}

.question-item:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* 问题悬浮效果 */
  background-color: rgba(255, 228, 225, 0.5);
}

.question-item p {
  margin-bottom: 10px;
}

.el-radio__input.is-checked + .el-radio__label {
  background-color: rgba(255, 228, 225, 0.5); /* 选中选项背景变为悬浮时的颜色 */
  color: inherit; /* 恢复文字颜色为默认 */
  border-radius: 3px;
  padding: 2px 5px;
}

.el-button {
  margin-top: 20px;
}

.score-modal {
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.score-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
}
</style>