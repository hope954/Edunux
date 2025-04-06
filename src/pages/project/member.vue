<template>
    <div class="member-intro-page">
      <h1 class="page-heading">团队成员介绍</h1>
      <div class="member-list">
        <el-card
          v-for="(member, index) in members"
          :key="index"
          class="member-card"
          shadow="hover"
        >
          <img
            :src="member.avatar"
            alt="成员头像"
            class="member-avatar"
          >
          <h2 class="member-name">{{ member.name }}</h2>
          <p class="member-position">{{ member.position }}</p>
          <p class="member-desc">{{ member.desc }}</p>
        </el-card>
      </div>
    </div>
  </template>
  
  <script>
// import { defineComponent } from 'vue';

  export default{
    setup(){
        const members = [
    {
      avatar: '../../assets/image/touxiang.jpg', // 占位头像（可替换为真实图片地址）
      name: '张三',
      position: '前端开发工程师',
      desc: '负责前端页面开发与交互实现，熟练掌握 Vue3 技术栈，注重代码质量与性能优化。'
    },
    {
      avatar: '../../assets/image/user.png',
      name: '李四',
      position: '后端开发工程师',
      desc: '专注于后端业务逻辑开发与接口设计，保障数据处理高效稳定，熟悉主流后端框架。'
    },
    {
      avatar: '../../assets/image/user.png',
      name: '王五',
      position: 'UI/UX 设计师',
      desc: '负责产品视觉设计与用户体验优化，擅长打造简洁美观且易用的界面，关注设计趋势与用户需求。'
    }
  ];
    return{
        members,
    };
    }
  }
  // 模拟成员数据（测试内容，后期可直接替换）
  
  </script>
  
  <style scoped>
  .member-intro-page {
    background-color: #f5f5f5;
    padding: 30px 20px;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .page-heading {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 40px;
    font-size: 28px;
    font-weight: 500;
  }
  
  .member-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
  }
  
  .member-card {
    width: 320px;
    text-align: center;
    padding: 30px 25px;
    background-color: #ffffff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
  }
  
  .member-avatar {
    width: 200px;
    height: 200px;
    margin-bottom: 20px;
    object-fit: cover;
    border-radius: 10px;
  }
  
  .member-name {
    font-size: 22px;
    color: #333333;
    margin-bottom: 12px;
    font-weight: 600;
  }
  
  .member-position {
    font-size: 16px;
    color: #666666;
    margin-bottom: 18px;
  }
  
  .member-desc {
    font-size: 14px;
    line-height: 1.6;
    color: #888888;
  }
  </style>

