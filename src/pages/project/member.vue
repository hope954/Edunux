<template>
  <div class="member-intro-page">
    <h1 class="page-heading">项目团队成员介绍</h1>
    <el-row class="member" :gutter="20" style="display: flex;">
      <el-col :span="24">
        <div class="card-container">
          <el-card shadow="hover" style="max-width: 300px; display: flex;">
            <div class="user">
              <img src="../../assets/image/mem.1.jpg" alt="">
              <div class="userinfo">
                <p class="name">李睿彤</p>
                <p class="role">项目负责人</p>
              </div>
            </div>
            <div class="login-info">
              <div class="info">
                <p>
                  李睿彤，女，西安电子科技大学大数据管理与应用专业学生，作为该项目负责人，主要负责项目规划分工、调研分析、报告撰写、网站建设等工作。本人主持国家级大创项目一项、参与省级项目一项，曾获2022-2023学年校二等奖学金（前15%），2023-2024学年校一等奖学金（前5%）。热爱竞赛，专注技术，曾获2024年美赛H奖，2024年全国大学生数学建模竞赛省级二等奖，2023年互联网加省级铜奖。参与开源项目，开源仓库链接：[场快订
                  -
                  Gitee](https://gitee.com/HelloDam/venue-reservation)（场馆预定SaaS平台），负责前端开发工作。日常撰写技术博客，分享前端技术，博客链接：[DanyHope的CSDN博客](https://blog.csdn.net/loverdany?spm=1010.2135.3001.5343)。
                </p>
              </div>
            </div>
            <i class="el-icon-star-on star-icon"></i>
          </el-card>
          <el-card shadow="hover" style="max-width: 300px; display: flex;">
            <div class="user">
              <img src="../../assets/image/mem.2.jpg" alt="">
              <div class="userinfo">
                <p class="name">范怡雯</p>
                <p class="role">项目成员</p>
              </div>
            </div>
            <div class="login-info">
              <div class="info">
                <p>
                  范怡雯，女，西安电子科技大学经济与管理学院2022级本科生，就读于大数据管理与应用专业。作为国家级大学生创新训练项目《创新创业课程教学满意度及需求调查研究》核心成员之一，主要负责文献梳理、报告论文撰写等工作。在校期间，积极投身各类相关项目与实践活动，实现理论知识向实践能力的转化，持续提升动手能力与问题解决能力。未来，计划投身该领域，从事大数据分析、系统开发和综合管理等工作，探索大数据技术在多元场景下的应用潜力与价值。
                </p>
              </div>
            </div>
            <i class="el-icon-star-on star-icon"></i>
          </el-card>
          <el-card shadow="hover" style="max-width: 300px">
            <div class="user">
              <img src="../../assets/image/mem.3.jpg" alt="">
              <div class="userinfo">
                <p class="name">刘海桐</p>
                <p class="role">项目成员</p>
              </div>
            </div>
            <div class="login-info">
              <div class="info">
                <p>
                  刘海桐，女，西安电子科技大学经济与管理学院2023级本科生，就读于大数据管理与应用专业。作为国家级大学生创新训练项目《创新创业课程教学满意度及需求调查研究》核心成员之一，主要负责理论模型构建，指标体系梳理，问卷调查实施与研究报告攥写等工作；本科期间广泛参与校内外社会实践实习与志愿服务多项，担任两个校级社团的主要负责人；在校内表现优良，曾获2023至2024学年度校级二等奖学金及2023至2024年度校级“优秀学生”荣誉称号。
                </p>
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

      };
    },
    methods: {

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