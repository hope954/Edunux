<template>
    <div class="faculty-profile">
      <!-- 主体内容 -->
      <div class="profile-container">
        <!-- 左侧信息 -->
        <div class="photo-section">
          <el-card shadow="hover" class="info-card">
            <img src="../../assets/image/tea.jpg" 
                 class="faculty-photo"
                 alt="陈兴老师照片">
            <div class="basic-info">
              <h2>陈兴 讲师</h2>
              <p>西安电子科技大学经济与管理学院</p>
              <el-divider/>
              <div class="contact-info">
                <p><i class="el-icon-office-building"></i>西安电子科技大学</p>
                <p><i class="el-icon-message"></i></p>
              </div>
            </div>
          </el-card>
        </div>
  
        <!-- 右侧详细信息 -->
        <div class="detail-section">
          <!-- 研究方向 -->
          <el-card class="info-card">
            <template #header>
              <div class="card-header">
                <i class="el-icon-reading"></i>
                <span style="font-weight: 600;font-size: 17px;">研究方向</span>
              </div>
            </template>
            <el-tag type="info" style="margin-right: 10px; background-color: #2c3e50; color: #fff">企业管理</el-tag>
            <el-tag type="info" style="margin-right: 10px; background-color: #2c3e50; color: #fff">创业管理</el-tag>
            <el-tag type="info" style="margin-right: 10px; background-color: #2c3e50; color: #fff">智能财务</el-tag>
          </el-card>
  
          <!-- 教学信息 -->
          <el-collapse v-model="activeCollapse">
            <el-collapse-item title="成果介绍" name="1">
              <div class="teaching-grid">
                <el-card shadow="hover">
                    <h4 style="font-weight: 600;font-size:15px;">成果</h4>
                    <li>近五年在国内公开期刊发表学术论文20余篇</li>
                    <li>参与国家社会科学基金、教育部人文社科基金多项</li>
                    <li>长期面向大型企事业单位开展战略规划、人力资源管理、企业管理咨询服务</li>
                    <li>主持或参与管理咨询项目20余项</li>
                </el-card>
                <el-card shadow="hover">
                  <h4 style="font-weight: 600;font-size:15px;">参与省级、校级教改项目多项</h4>
                  <li>省级一流课程《创业基础》课程组核心成员，省级一流线上线下混合式课程《会计学》课程组核心成员</li>
                  <li>所授课程《创业基础》获评校级本科教学优质奖二等奖</li>
                </el-card>
                <el-card shadow="hover">
                  <h4 style="font-weight: 600;font-size:15px;">大创项目</h4>
                  <p>作为指导教师指导国家级大学生创新训练计划项目1项、省级大学生创新训练计划项目2项</p>
                </el-card>
              </div>
            </el-collapse-item>
  
            <!-- 项目时间轴 -->
            <!-- <el-collapse-item title="项目经历" name="2">
              <el-timeline class="project-timeline">
                <el-timeline-item
                    v-for="(item, index) in projects"
                    :key="index"
                    :timestamp="item.year">
                  {{ item.content }}
                </el-timeline-item>
              </el-timeline>
            </el-collapse-item> -->
          </el-collapse>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeCollapse: ['1', '2'],
        projects: [
          { year: '2023', content: '指导国家级大创项目《智能数据分析系统》' },
          { year: '2022', content: '某大型企业数字化转型咨询项目' },
          { year: '2021', content: '主持省级重点研发计划项目' }
        ]
      }
    },
    methods: {
      
    }
  }
  </script>
  
  <style lang="less" scoped>
  .faculty-profile {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background:linear-gradient(to bottom, #ffe4e1, #e6e6fa);;
    border-radius: 8px;
    
    .detail-section {
    padding: 20px; // 添加整体内边距
  
    // 成果介绍标题样式
    ::v-deep .el-collapse-item__header {
      font-size: 17px ;
      font-weight: 600 ;
      padding-left: 20px;
    }
  }
    .profile-container {
      display: grid;
      grid-template-columns: 280px 1fr;
      gap: 30px;
    //   margin-top: 20px;
      align-items: center; // 垂直居中对齐
      justify-content: center; // 水平居中对齐
      .faculty-photo {
        width: 100%;
        height: 350px;
        border-radius: 4px;
        margin-bottom: 15px;
        object-fit: cover;
      }
  
      .basic-info {
        h2 {
          margin-bottom: 8px;
          color: #2c3e50;
        }
        
        p {
          color: #666;
          font-size: 0.95em;
        }
      }
  
      .teaching-grid {
        display: grid;
        gap: 15px;
        padding: 20px;
        padding-top: 0;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      }
  
      .project-timeline {
        margin-top: 20px;
      }
    }
  
    @media (max-width: 768px) {
      .profile-container {
        grid-template-columns: 1fr;
        
        .faculty-photo {
          height: 250px;
        }
      }
    }
  }
  </style>