<template>
    <div>
        <router-view />
    </div>
    
</template>

<script>
    export default {
    
    }
</script>
<style lang="less" scoped>
    .member {
        display: flex;
        gap: 20px;

        .card-container {
            display: flex;
            flex-wrap: nowrap;
            /* 防止卡片换行 */
            overflow-x: auto;
            /* 当卡片超出容器宽度时显示滚动条 */
            gap: 20px;
            justify-content: space-between;
            /* 使卡片等距排列 */
            margin-right: 50px;
            margin-left: 50px;
        }

        .card-container el-card {
            /* 让每个卡片宽度相等，扣除间隙宽度 */
            flex: 1;
        }

        .user {
            justify-content: center;
            /* 让图片和文字容器整体居中 */
            display: flex;
            align-items: center;
            padding-bottom: 20px;
            border-bottom: 1px solid #ccc;
            margin-bottom: 20px;

            img {
                width: 150px;
                height: 150px;
                // border-radius: 50%;
                // margin-right: 40px;
            }
        }

        .login-info {
            p {
                text-align: center;
                /* 让整个登录信息区域文字居中 */
                line-height: 30px;
                font-size: 16px;
                color: #666;

                span {
                    color: #666;
                    margin-left: 50px;

                }
            }

            .info {
                color: #333;
                // margin-left: 30px;
                font-size: 14px;
            }

        }
    }
</style>