<template>
    <div>
        <router-view />
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
    </el-row>
    </div>
    
</template>

<script>
export default{

}
</script>
<style lang="less" scoped>
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