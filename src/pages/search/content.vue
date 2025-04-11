<template>
    <div>
      <h1>调查问卷</h1>
      <div v-for="(question, index) in questions" :key="index">
        <p>{{ question.question }}</p>
        <el-radio-group v-model="answers[index]">
          <el-radio :label="i" v-for="i in 5" :key="i">
            {{ i }} 分
          </el-radio>
        </el-radio-group>
      </div>
      <el-button @click="submitSurvey">提交问卷</el-button>
      <div v-if="isSubmitted" class="score-modal">
        <div class="score-content">
          <p>你的问卷得分是: {{ calculateScore() }}</p>
          <p>{{ getFeedback(calculateScore()) }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
//   import { ref, computed } from 'vue';
import { ElRadioGroup, ElRadio, ElButton } from 'element-plus';

  // 定义调查问卷问题
  const questions = ref([
    {
      question: '你是否喜欢阅读？'
    },
    {
      question: '你每周运动几次？'
    }
  ]);
  
  // 存储用户答案
  const answers = ref(new Array(questions.value.length).fill(null));
  
  // 标记是否提交问卷
  const isSubmitted = ref(false);
  
  // 计算得分
  const calculateScore = computed(() => {
    let totalScore = 0;
    answers.value.forEach((answer) => {
      if (answer!== null) {
        totalScore += answer;
      }
    });
    return totalScore;
  });
  
  // 根据得分获取反馈信息
  const getFeedback = (score) => {
    if (score <= 5) {
      return '你的状态有待提升，继续加油哦！';
    } else if (score <= 8) {
      return '你的表现还不错，仍有进步空间！';
    } else {
      return '你的状态非常棒，继续保持呀！';
    }
  };
  
  // 提交问卷方法
  const submitSurvey = () => {
    isSubmitted.value = true;
  };
  </script>
  
  <style scoped>
  .score-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .score-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  </style>    
<!-- <template>
    <div>我是量表内容啦啦啦</div>
    
</template>

<script>
export default{

}
</script>
<style lang="less">
</style> -->