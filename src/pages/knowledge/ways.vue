<template>
  <div class="model-page-container">
    <!-- 入口卡片 -->
    <div v-if="!showPdf" class="entry-card">
      <h1>欢迎来到知识库！</h1>
      <p>这是我们项目的评价方法！</p>
      <el-button type="primary" @click="showPdf = true">进入评价方法</el-button>
    </div>
    <!-- PDF 展示区域 -->
    <div v-else class="pdf-section">
      <!-- <el-button type="primary" @click="handleClick">显示全文</el-button> -->
      <div id="pdf-container">
        <el-row class="home" :gutter="20">
          <el-col :span="20">
            <div v-for="image in images" :key="index">
              <img :src="image" alt="" height="900" loading="lazy" />
            </div>
          </el-col>
          <el-col :span="40"></el-col>
        </el-row>
      </div>
      <el-button type="primary" @click="downloadPdf">下载评价方法</el-button>
    </div>
  </div>
</template>

<script>
  import { defineComponent, onMounted, onBeforeUnmount } from 'vue';
  import { ref } from 'vue';
  import * as pdfjsLib from 'pdfjs-dist';
  import 'pdfjs-dist/web/pdf_viewer.css';

  pdfjsLib.GlobalWorkerOptions.workerSrc = new URL('./assets/pdf.worker.min.js', import.meta.url).href;

  export default defineComponent({
    setup() {
      // 本地文件路径（假设 PDF 存放在 src/assets/理论模型.pdf）
      const pdfUrl = new URL('../../assets/评价方法.pdf', import.meta.url).href;
      console.log(pdfUrl);
      const showPdf = ref(false);
      const handleClick = () => {
        showPdf.value = true;
        console.log('showPdf:', showPdf.value);
      };
      const downloadPdf = () => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = '评价方法.pdf'; // 下载时的文件名
        link.click();
      };

      // const renderPdf = async () => {
      //   console.log('开始渲染 PDF');
      //   const pdfContainer = document.getElementById('pdf-container');
      //   const loadingTask = pdfjsLib.getDocument(pdfUrl);
      //   try {
      //     const pdf = await loadingTask.promise;
      //     console.log('PDF 文件加载成功');
      //     for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
      //       const page = await pdf.getPage(pageNumber);
      //       console.log(`第 ${pageNumber} 页加载成功`);
      //       const scale = 1.5;
      //       const viewport = page.getViewport({ scale: scale });
      //       const canvas = document.createElement('canvas');
      //       const context = canvas.getContext('2d');
      //       canvas.height = viewport.height;
      //       canvas.width = viewport.width;
      //       const renderContext = {
      //         canvasContext: context,
      //         viewport: viewport
      //       };
      //       await page.render(renderContext).promise;
      //       console.log(`第 ${pageNumber} 页渲染成功`);
      //       pdfContainer.appendChild(canvas);
      //     }
      //   } catch (error) {
      //     console.error('PDF 渲染出错:', error);
      //   }
      // };
      // onMounted(() => {
      //   if (showPdf.value) {
      //     renderPdf();
      //   }
      // });
      const imageArr = new Array(22)
        .fill("")
        .map((_image, idx) => {
          try {
            // 使用 new URL 导入图片
            return new URL(`./imgsForways/demo(${idx + 1}).png`, import.meta.url).href;
          } catch (error) {
            console.error(`Failed to load image: demo(${idx + 1}).png`, error);
            return '';
          }
        });
      return {
        pdfUrl,
        showPdf,
        downloadPdf,
        handleClick,
        images: [...imageArr],
      };
    }
  });
</script>

<style lang="less" scoped>
  /* 可爱风格样式（粉色+紫色） */
  .model-page-container {
    background: linear-gradient(to bottom, #ffe4e1, #e6e6fa);
    /* 渐变背景 */
    min-height: 300px;
    max-width: 800px;
    padding: 30px 20px;
    border-radius: 15px;
    margin: 0 auto;
    .entry-card {
      background: rgba(255, 255, 255, 0.9);
      padding: 40px 40px;
      border-radius: 30px;
      box-shadow: 0 10px 20px rgba(255, 126, 183, 0.2);

      .el-icon {
        font-size: 48px;
        color: #ff7eb7;
        /* 主色：粉色 */
        margin-bottom: 20px;
      }

      h1 {
        color: #8a2be2;
        /* 辅色：紫色 */
        font-size: 32px;
        font-weight: 600;
        margin-bottom: 15px;
      }

      p {
        color: #555;
        font-size: 18px;
        line-height: 1.6;
        margin-bottom: 30px;
      }

      .el-button {
        background: #ff7eb7;
        border: none;
        border-radius: 25px;
        padding: 12px 35px;
        font-size: 18px;
        box-shadow: 0 5px 15px rgba(255, 126, 183, 0.3);
      }
    }

    .home {
      margin: 0 0;
      text-align: center;
    }

    .pdf-section {
      margin-top: 0;
      padding-top:20px;
      padding-left: 60px;
      padding-right: 60px;

      canvas {
        border-radius: 20px;
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
        margin-bottom: 20px;
      }

      .el-button {
        background: #8a2be2;
        /* 下载按钮紫色 */
        margin-top: 0;
        box-shadow: 0 5px 5px rgba(138, 43, 226, 0.3);
      }
    }
  }
</style>