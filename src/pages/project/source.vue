<template>
    <div>
        <el-main class="main-content">
            <p>项目背景</p>
            <p>随着社会经济的发展和技术的进步，一方面，创新创业课程的需求和满意度研究可能会面临新的挑战和机遇。例如，新的教学方法和技术（如在线学习、模拟创业等）可能会提高教学效果和满意度；</p>
            <p>另一方面，新的就业市场和创新趋势可能在客观上需要创新创业课程做出相应的调整。</p>
            <p>任何课程都需要持续改进才能符合经济社会发展趋势，才能满足学生的具体需求。通过定期开展课程满意度调查和需求分析，可以找出创新创业课程的不足与问题，并制定相应的改进策略与优化措施，</p>
            <p>这将不仅有助于提高课程教学效果与质量，更可以帮助学生有效应对未来的创新创业挑战。</p>
            <el-image style="width: 200px; height: 200px" :src="url" />
        </el-main>
    </div>
</template>

<script>
import { progressProps } from 'element-plus';
import { defineComponent } from 'vue';
    export default defineComponent({
        setup(){
            const url ='../../assets/image/source.png';
            return{
                url,
            }
        }
        
    })
</script>
<style lang="less" scoped>
.main-content p {
    white-space: normal; /* 确保文字自动换行 */
    word-wrap: break-word; /* 允许长单词或 URL 换行 */
    word-break: break-all; /* 强制在任意位置换行 */
    font-size: 16px;
    color: #333;
    line-height: 26px;
}
// .source{
//     h1{
       
//         align-items: center;
//         padding-bottom: 20px;
//         font-size: 28px;
//         margin-bottom: 20px; }
//         p{
//             background-color: red;
//             font-size: 16px;
//             color: #333;
//             line-height: 26px;
//         }
//         img{
//             width: 150px;
//             height: 150px;
//             border-radius: 50%;
//             margin-right: 40px;
//         }
// }
</style>