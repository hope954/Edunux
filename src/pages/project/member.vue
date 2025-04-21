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
    <div>
        <el-row class="member" :gutter="20" style="display: flex;">
            <el-col :span="24"> <!-- 修改为占满一行 -->
                <div class="card-container"> <!-- 新增容器用于卡片布局 -->
                    <el-card shadow="hover"  style="max-width: 300px; display: flex;">
                        <div class="user" style="display: flex;">
                            <img src="../../assets/image/touxiang.jpg" alt="">
                            <div class="userinfo">
                                <!-- <p class="name">admin</p>
                                <p class="role">超级管理院</p> -->
                            </div>
                        </div>
                        <div class="login-info">
                            <p>项目负责人<span>李睿彤</span></p>
                            <div class="info">
                                <p>西安电子科技大学</p>
                                <p>大数据管理与应用</p>
                                <p>李睿彤，西安电子科技大学大数据管理与应用专业学生，担任项目负责人一职。她专业知识扎实，有着良好的组织协调能力与责任心，在项目推进中展现出优秀的领导才能，带领团队有条不紊地开展工作，为项目的顺利进行贡献着重要力量。 </p>
                            </div> 
                        </div>
                    </el-card>
                    <el-card shadow="hover" style="max-width: 300px; display: flex;">
                        <div class="user">
                            <img src="../../assets/image/user.png" alt="">
                            <div class="userinfo">
                                <!-- <p class="name">admin</p>
                                <p class="role">超级管理院</p> -->
                            </div>
                        </div>
                        <div class="login-info">
                            <p>项目成员<span>范怡雯</span></p>
                            <div class="info">
                                <p>西安电子科技大学</p>
                                <p>大数据管理与应用</p>
                                <P>范怡雯就读于西安电子科技大学大数据管理与应用专业，是项目的重要成员。她思维敏捷，学习能力强，在大数据领域有一定见解。工作中，她认真负责、积极主动，凭借专业知识为项目解决诸多难题，是团队里可靠且充满活力的伙伴。 </P>
                            </div> 
                        </div>
                    </el-card>
                    <el-card shadow="hover" style="max-width: 300px">
                        <div class="user">
                            <img src="../../assets/image/hezhao.jpg" alt="">
                            <div class="userinfo">
                                <!-- <p class="name">admin</p>
                                <p class="role">超级管理院</p> -->
                            </div>
                        </div>
                        <div class="login-info">
                            <p>项目成员<span>刘海桐</span></p>
                            <div class="info">
                                <p>西安电子科技大学</p>
                                <p>大数据管理与应用</p>
                                <p>刘海桐是西安电子科技大学大数据管理与应用专业的学生，作为项目成员，他具备扎实的专业知识和较强的数据分析能力。在项目中，他积极投入、善于钻研，凭借对大数据的敏锐洞察，为项目提供了诸多创新性思路，为项目的成功推进贡献了重要力量。 </p>
                            </div> 
                        </div>
                    </el-card>
                </div>
            </el-col>
        </el-row>
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
    overflow: auto;
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
  
  .member{
    display: flex;
    gap: 20px;
    .card-container {
        display: flex;
        flex-wrap: nowrap; /* 防止卡片换行 */
        overflow-x: auto; /* 当卡片超出容器宽度时显示滚动条 */
        gap: 20px;
        justify-content: space-between; /* 使卡片等距排列 */
        margin-right: 50px;
        margin-left: 50px;
    }
    .card-container el-card {
        /* 让每个卡片宽度相等，扣除间隙宽度 */
        flex: 1; 
    }
    .user{
        justify-content: center; /* 让图片和文字容器整体居中 */
        display: flex;
        align-items: center;
        padding-bottom: 20px;
        border-bottom: 1px solid #ccc;
        margin-bottom: 20px;
        img{
            width: 150px;
            height: 150px;
            /* border-radius: 50%; */
            /* margin-right: 40px; */
        }
    }
    .login-info{
        p{
            text-align: center; /* 让整个登录信息区域文字居中 */
            line-height: 30px;
            font-size: 16px;
            color: #666;
            span{
                color: #666;
                margin-left: 50px;

            }
        }
        .info{
            color: #333;
            /* margin-left: 30px; */
            font-size: 14px;
        }

    }
}
  </style>

