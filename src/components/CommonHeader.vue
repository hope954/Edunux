<template>
    <el-header>
        <div class="l-content">
            <el-button size="small" plain @click="handleCollpase()">
                <el-icon>
                    <Menu />
                </el-icon>
            </el-button>
            <!-- <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
                <el-breadcrumb-item>
                    <a href="/">promotion management</a>
                </el-breadcrumb-item>
                <el-breadcrumb-item>promotion list</el-breadcrumb-item>
                <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
            </el-breadcrumb> -->
            <!-- <h3>shouye</h3> -->
        </div>
        <div class="r-content">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <img class="user" :src="getImgSrc('user')" alt="" />
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="goToUserPage()">个人中心</el-dropdown-item>
                        <el-dropdown-item>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </el-header>
</template>
<script>
import { defineComponent } from 'vue';
import {useStore} from 'vuex'
import { useRouter } from 'vue-router';
export default{
    setup(){
        let store = useStore()
        //写一个函数实现静态资源的引入
        const getImgSrc =(user)=>{
            return new URL (`../assets/image/${user}.png`, import.meta.url).href;
        };
        let handleCollpase=()=>{
            store.commit("updateIsCollapse");
        };
        const goToUserPage = () => {
            router.push({
                name:"user"
            });
        };
        return{
            getImgSrc,
            handleCollpase,
            goToUserPage
        };
    }
}
</script>
<style lang="less" scoped>
header{
    --el-header-padding: 0 0;
    display: flex;
    justify-content: space-between;
    align-items:center;
    width: 100%;
    // width: auto; /* 确保头部宽度自适应 */
    height: 100%; /* 确保头部高度自适应 */
    // height: 100%;
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 10px;
    padding-left: 0px;
    background-color: #333;
  }

  .sidebar {
    width: 100%;
    min-width: auto;
  }
.r-content{
    .user{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        // margin-right:20px;
    }
}
.l-content{
    display: flex;
    align-items: center;
    .el-button{
        margin-right:20px;
        margin-left: 20px;
    }
    h3{
        color: #fff;
    }
}


</style>