<template>
    <div class="model-page-container">
    <!-- 入口卡片 -->
    <div v-if="!showPdf" class="entry-card">
      <h1>欢迎来到知识库！</h1>
      <p>这是我们项目的指标体系！</p>
      <el-button type="primary" @click="showPdf = true">进入指标体系</el-button>
    </div>
    <!-- PDF 展示区域 -->
    <div v-else class="pdf-section">
      <!-- <el-button type="primary" @click="handleClick">显示全文</el-button> -->
      <div id="pdf-container">
        <div>
        <h2 style="margin: 15px;margin-left: 70px; font-size: 20px; font-weight: 600;">第一个一级指标:课程设置</h2>
        <table>
            <thead>
                <tr>
                    <th>一级指标</th>
                    <th>二级指标</th>
                    <th>三级指标</th>
                </tr>
            </thead>
            <tbody>
                <!-- 课程教学 -->
                <tr>
                    <td rowspan="20" class="first-level">课程设置</td>
                    <td rowspan="1">课程性质</td>
                    <!-- <td>课前预习</td> -->
                </tr>
                <tr>
                    <!-- <td>章节概述</td> -->
                </tr>
                <tr>
                    <td rowspan="1">开课学期</td>
                    <!-- <td>知识讲授</td> -->
                </tr>
                <tr>
                    <td rowspan="2">课程目标</td>
                    <td>课程目标与个人发展相契合</td>
                </tr>
                <tr>
                    <td>课程目标与内容符合度</td>
                </tr>
                <tr>
                    <td>教学计划</td>
                </tr>
                <tr>
                    <td rowspan="5">课程内容</td>
                    <td>课程内容充实度</td>
                </tr>
                <tr>
                    <td>课程内容系统性</td>
                </tr>
                <tr>
                    <td>课程内容价值性</td>
                </tr>
                <tr>
                    <td>课程内容模块化</td>
                </tr>
                <tr>
                    <td>课程内容关联性</td>
                </tr>
                <tr>
                    <td rowspan="2">课程团队</td>
                    <td>课程团队授课</td>
                </tr>
                <tr>
                    <td>课程单人授课</td>
                </tr>
                <tr>
                    <td rowspan="2">课程考核</td>
                    <td>课程考核构成</td>
                </tr>
                <tr>
                    <td>课程考核方式</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div>
        <h2 style="margin: 15px;margin-left: 70px; font-size: 20px; font-weight: 600;">第二个一级指标课程教学</h2>
        <table>
            <thead>
                <tr>
                    <th>一级指标</th>
                    <th>二级指标</th>
                    <th>三级指标</th>
                </tr>
            </thead>
            <tbody>
                <!-- 课程教学 -->
                <tr>
                    <td rowspan="17" class="first-level">课程教学</td>
                    <td rowspan="2">教学前</td>
                    <td>课前预习</td>
                </tr>
                <tr>
                    <td>章节概述</td>
                </tr>
                <tr>
                    <td rowspan="5">教学中</td>
                    <td>知识讲授</td>
                </tr>
                <tr>
                    <td>理论联系实际</td>
                </tr>
                <tr>
                    <td>课堂互动</td>
                </tr>
                <tr>
                    <td>教学方式</td>
                </tr>
                <tr>
                    <td>教学规范程度</td>
                </tr>
                <tr>
                    <td rowspan="4">教学后</td>
                    <td>自学指导</td>
                </tr>
                <tr>
                    <td>学情监督</td>
                </tr>
                <tr>
                    <td>拓展学习</td>
                </tr>
                <tr>
                    <td>双创活动指导</td>
                </tr>
                <tr>
                    <td rowspan="6">教学效果</td>
                    <!-- <td rowspan="6"></td> -->
                    <td>三观培养</td>
                </tr>
                <tr>
                    <td>知识掌握</td>
                </tr>
                <tr>
                    <td>意识培育</td>
                </tr>
                <tr>
                    <td>技能掌握</td>
                </tr>
                <tr>
                    <td>意愿提升</td>
                </tr>
                <tr>
                    <td>成果产出</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div>
        <h2 style="margin: 15px;margin-left: 70px; font-size: 20px; font-weight: 600;">第三个一级指标课程资源</h2>
        <table>
            <thead>
                <tr>
                    <th>一级指标</th>
                    <th>二级指标</th>
                    <th>三级指标</th>
                </tr>
            </thead>
            <tbody>
                <!-- 课程教学 -->
                <tr>
                    <td rowspan="13" class="first-level">课程教学</td>
                    <td rowspan="7">教学资源</td>
                    <td>课程PPT</td>
                </tr>
                <tr>
                    <td>课程案例</td>
                </tr>
                <tr>
                    <td>课程案例</td>
                </tr>
                <tr>
                    <td>课程案例</td>
                </tr>
                <tr>
                    <td>课程案例</td>
                </tr>
                <tr>
                    <td>课程案例</td>
                </tr>
                <tr>
                    <td>课程案例</td>
                </tr>
                <tr>
                    <td rowspan="6">配套资源</td>
                    <td>知识讲授</td>
                </tr>
                <tr>
                    <td>理论联系实际</td>
                </tr>
                <tr>
                    <td>课堂互动</td>
                </tr>
                <tr>
                    <td>教学方式</td>
                </tr>
                <tr>
                    <td>教学规范程度</td>
                </tr>
                <tr>
                    <td>教学规范程度</td>
                </tr>
            </tbody>
        </table>
    </div>
      </div>
      <el-button type="primary" @click="downloadPdf">下载指标体系</el-button>
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
      const pdfUrl = new URL('../../assets/理论模型.pdf', import.meta.url).href;
      console.log(pdfUrl);
      const showPdf = ref(false);
      const handleClick = () => {
        showPdf.value = true;
        console.log('showPdf:', showPdf.value);
      };
      const downloadPdf = () => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = '理论模型.pdf'; // 下载时的文件名
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
            return new URL(`./imgForModel/demo(${idx + 1}).png`, import.meta.url).href;
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
body {
    background: url('your-purple-pink-image.jpg'); /* 替换为你的粉紫色背景图片路径 */
    background-size: cover;
    background-repeat: no-repeat;
}

table {
    width: 80%; /* 缩短表格宽度 */
    border-collapse: collapse;
    border: 1px solid #e0e0e0;
    margin: 0 auto 20px; /* 表格水平居中 */
    background-color: rgba(255, 255, 255, 0.8); /* 表格半透明背景，让背景图透出一些 */
}

th {
    background-color: #ffc0cb; /* 浅粉色表头 */
    font-weight: bold;
    padding: 12px;
    text-align: center;
    vertical-align: middle;
    border: 1px solid #ffe4e1;
}

td {
    padding: 10px;
    text-align: center;
    vertical-align: middle;
    border: 1px solid #ffe4e1;
}

tr:nth-child(even) {
    background-color: rgba(255, 228, 225, 0.8); /* 淡粉色偶数行背景 */
}

tr:hover {
    background-color: #ffe4e1; /* 鼠标悬停时的背景色 */
}

.first-level {
    background-color: rgba(255, 255, 255, 0.5); /* 一级指标颜色和表头一致 */
   
}
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
      padding: 20px;
      color:black;

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