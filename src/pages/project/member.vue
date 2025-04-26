<template>
  <div class="member-intro-page">
      <h1 class="page-heading">项目团队成员介绍</h1>
      <el-row class="member" :gutter="20" style="display: flex;">
          <el-col :span="24">
              <div class="card-container">
                  <el-card shadow="hover" style="max-width: 300px; display: flex;" @mouseenter="showDetails(0)" @mouseleave="hideDetails(0)">
                      <div class="user" :class="{ 'show-details': showInfo[0] }">
                          <img src="../../assets/image/touxiang.jpg" alt="">
                          <div class="userinfo">
                              <p class="name">李睿彤</p>
                              <p class="role">项目负责人</p>
                          </div>
                      </div>
                      <div class="login-info" :class="{ 'show-details': showInfo[0] }">
                          <p>项目负责人<span>李睿彤</span></p>
                          <div class="info">
                              <p>西安电子科技大学</p>
                              <p>大数据管理与应用</p>
                              <p>李睿彤，西安电子科技大学大数据管理与应用专业学生，担任项目负责人一职。她专业知识扎实，有着良好的组织协调能力与责任心，在项目推进中展现出优秀的领导才能，带领团队有条不紊地开展工作，为项目的顺利进行贡献着重要力量。 </p>
                          </div> 
                      </div>
                      <i class="el-icon-star-on star-icon"></i>
                  </el-card>
                  <el-card shadow="hover" style="max-width: 300px; display: flex;" @mouseenter="showDetails(1)" @mouseleave="hideDetails(1)">
                      <div class="user" :class="{ 'show-details': showInfo[1] }">
                          <img src="../../assets/image/user.png" alt="">
                          <div class="userinfo">
                              <p class="name">范怡雯</p>
                              <p class="role">项目成员</p>
                          </div>
                      </div>
                      <div class="login-info" :class="{ 'show-details': showInfo[1] }">
                          <p>项目成员<span>范怡雯</span></p>
                          <div class="info">
                              <p>西安电子科技大学</p>
                              <p>大数据管理与应用</p>
                              <p>范怡雯就读于西安电子科技大学大数据管理与应用专业，是项目的重要成员。她思维敏捷，学习能力强，在大数据领域有一定见解。工作中，她认真负责、积极主动，凭借专业知识为项目解决诸多难题，是团队里可靠且充满活力的伙伴。 </p>
                          </div> 
                      </div>
                      <i class="el-icon-star-on star-icon"></i>
                  </el-card>
                  <el-card shadow="hover" style="max-width: 300px" @mouseenter="showDetails(2)" @mouseleave="hideDetails(2)">
                      <div class="user" :class="{ 'show-details': showInfo[2] }">
                          <img src="../../assets/image/hezhao.jpg" alt="">
                          <div class="userinfo">
                              <p class="name">刘海桐</p>
                              <p class="role">项目成员</p>
                          </div>
                      </div>
                      <div class="login-info" :class="{ 'show-details': showInfo[2] }">
                          <p>项目成员<span>刘海桐</span></p>
                          <div class="info">
                              <p>西安电子科技大学</p>
                              <p>大数据管理与应用</p>
                              <p>刘海桐是西安电子科技大学大数据管理与应用专业的学生，作为项目成员，他具备扎实的专业知识和较强的数据分析能力。在项目中，他积极投入、善于钻研，凭借对大数据的敏锐洞察，为项目提供了诸多创新性思路，为项目的成功推进贡献了重要力量。 </p>
                          </div> 
                      </div>
                      <i class="el-icon-star-on star-icon"></i>
                  </el-card>
              </div>
          </el-col>
      </el-row>
  </div> 
</template>

<script>
export default {
  data() {
      return {
          showInfo: [false, false, false]
      };
  },
  methods: {
      showDetails(index) {
          this.showInfo[index] = true;
      },
      hideDetails(index) {
          this.showInfo[index] = false;
      }
  }
}
</script>

<style scoped>
.member-intro-page {
  background: linear-gradient(to bottom, #ffe4e1, #e6e6fa);
  padding: 30px 20px;
  max-width: 1200px;
  margin: 50px auto;
  border-radius: 28px;
}

.page-heading {
  text-align: center;
  color: #8b008b;
  margin-bottom: 40px;
  font-size: 32px;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
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
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.8);
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

.member {
  display: flex;
  gap: 20px;
}

.card-container {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 20px;
  justify-content: space-between;
  margin-right: 50px;
  margin-left: 50px;
  
}

.card-container el-card {
  flex: 1;
  background-color: #fff0f5;
  border-radius: 30px;
  transition: transform 0.3s ease;
}

.card-container el-card:hover {
  transform: scale(1.2);
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.6);
}

.user {
  justify-content: center;
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
}

.user img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 20px;
}

.userinfo {
  text-align: left;
}

.login-info p {
  text-align: center;
  line-height: 30px;
  font-size: 16px;
  color: #666;
}

.login-info p span {
  color: #666;
  margin-left: 10px;
}

.login-info .info {
  color: #333;
  font-size: 14px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.show-details .info {
  max-height: 500px;
}

.star-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  color: #ffd700;
}
</style>