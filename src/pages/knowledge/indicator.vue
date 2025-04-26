<template>
    <div>
        <h2 style="margin: 30px;margin-left: 120px; font-size: 20px; font-weight: 600;">第一个一级指标:课程设置</h2>
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
        <h2 style="margin: 30px;margin-left: 120px; font-size: 20px; font-weight: 600;">第二个一级指标课程教学</h2>
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
        <h2 style="margin: 30px;margin-left: 120px; font-size: 20px; font-weight: 600;">第三个一级指标课程资源</h2>
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
</template>

<script>
export default {

}
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

</style>    