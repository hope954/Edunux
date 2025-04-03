<template>
    <div class="teacher">
        <el-row class="member" :gutter="20" style="display: flex;">
            <el-col :span="24"> <!-- 修改为占满一行 -->
                <div class="card-container"> <!-- 新增容器用于卡片布局 -->
                    <el-card shadow="hover"  style="max-width: 300px; display: flex;">
                        <div class="user" style="display: flex;">
                            <img src="../../assets/image/hezhao.jpg" alt="">
                            <div class="userinfo">
                                <!-- <p class="name">admin</p>
                                <p class="role">超级管理院</p> -->
                            </div>
                        </div>
                        <div class="login-info">
                            <p>指导教师<span>陈兴</span></p>
                            <div class="info">
                                <p>西安电子科技大学</p>
                                <p>教师</p>
                                <p>陈兴老师，是西安电子科技大学大数据管理与应用领域的指导教师。他专业知识深厚，在大数据理论与实践方面造诣颇高。

陈老师教学经验丰富，善于引导学生将理论知识应用于实际项目。在指导学生时，他耐心细致，鼓励学生创新思维，注重培养学生解决实际问题的能力。经他指导的项目成果丰硕，助力学生不断成长进步。</p>
                            </div> 
                        </div>
                    </el-card>
                </div>
            </el-col>
        </el-row>
    </div>
    
</template>

<script>
export default{

}
</script>
<style lang="less" scoped>
.teacher{
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
            // border-radius: 50%;
            // margin-right: 40px;
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
            // margin-left: 30px;
            font-size: 14px;
        }

    }
}
</style> 