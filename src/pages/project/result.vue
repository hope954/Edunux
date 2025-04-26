<template>
  <div class="project-result-container">
    <h1 class="title">项目成果展示</h1>
    <div class="result-cards">
      <div
        v-for="(result, index) in results"
        :key="index"
        class="result-card"
        :style="{ backgroundColor: index % 2 === 0? 'rgba(255, 192, 203, 0.8)' : 'rgba(230, 230, 250, 0.8)' }"
        @click="openModal(index)"
      >
        <!-- 使用 Font Awesome 图标 -->
        <i class="fa fa-file-pdf-o cartoon-icon"></i>
        <p class="result-name">{{ result.name }}</p>
      </div>
    </div>
    <!-- 成果详情模态框 -->
    <div
      v-if="isModalOpen"
      class="result-modal"
      @click.self="closeModal"
    >
      <div class="modal-content">
        <h2 class="modal-title">{{ currentResult.name }}</h2>
        <!-- 使用 Google Docs Viewer 进行文件预览 -->
        <iframe
  :src="'https://pdf.sejda.com/embed.html?file=' + encodeURIComponent(currentResult.fileUrl)"
  frameborder="0"
  style="width: 100%; height: 500px"
></iframe>
        <button class="download-button" @click="downloadResult">下载成果文件</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 模拟项目成果数据
const results = ref([
  {
    name: '成果一：创新教学方法实践报告',
    fileUrl: ' http://172.20.10.2:8082/results/result1.pdf' 
  },
  {
    name: '成果二：智能教学平台设计方案',
    fileUrl: ' http://172.20.10.2:8082/results/result1.pdf' 
  },
  {
    name: '成果三：创新创业案例集',
    fileUrl: ' http://172.20.10.2:8082/results/result1.pdf' 
  },
  {
    name: '成果四：学生创新作品展示',
    fileUrl: ' http://172.20.10.2:8082/results/result1.pdf' 
  },
  {
    name: '成果五：教学资源整合方案',
    fileUrl: ' http://172.20.10.2:8082/results/result1.pdf' 
  },
  {
    name: '成果六：创新实践活动总结',
    fileUrl: ' http://172.20.10.2:8082/results/result1.pdf' 
  },
  {
    name: '成果七：教育技术应用研究报告',
    fileUrl: ' http://172.20.10.2:8082/results/result1.pdf' 
  },
  {
    name: '成果八：课程改革成果汇报',
    fileUrl: ' http://172.20.10.2:8082/results/result1.pdf' 
  }
]);

// 控制模态框显示与隐藏
const isModalOpen = ref(false);
// 当前查看的成果
const currentResult = ref(null);

// 打开模态框
const openModal = (index) => {
  currentResult.value = results.value[index];
  isModalOpen.value = true;
};

// 关闭模态框
const closeModal = () => {
  isModalOpen.value = false;
  currentResult.value = null;
};

// 下载成果文件
const downloadResult = () => {
  if (currentResult.value && currentResult.value.fileUrl) {
    const link = document.createElement('a');
    link.href = currentResult.value.fileUrl;
    link.download = currentResult.value.name.replace(/：| /g, '_') + '.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};
</script>

<style scoped>
.project-result-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
  font-family: Arial, sans-serif; /* 修改字体 */
  background-color: #fce4ec; /* 修改背景颜色 */
}

.title {
  font-size: 36px;
  text-align: center;
  margin-bottom: 30px;
  color: #333;
}

.result-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.result-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s ease;
}

.result-card:hover {
  transform: translateY(-5px);
}

.cartoon-icon {
  font-size: 60px; /* 设置图标大小 */
  margin-bottom: 10px;
  color: #333; /* 设置图标颜色 */
}

.result-name {
  font-size: 20px;
  color: #333;
  text-align: center;
}

.result-modal {
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

.modal-content {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  text-align: center;
  max-width: 800px;
  width: 100%;
}

.modal-title {
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
}

.download-button {
  background-color: #007BFF;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.download-button:hover {
  background-color: #0056b3;
}
</style>