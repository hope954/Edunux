<template>
    <el-header >
        <div class="l-content">
            <el-button size="middle">
                <el-icon><Menu /></el-icon>
            </el-button>
            <h3>shouye</h3>
        </div>
        <div class="r-content">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <img class="user" :src="getImgSrc('user')" alt="" />
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>Action 1</el-dropdown-item>
                        <el-dropdown-item>Action 2</el-dropdown-item>
                        <el-dropdown-item>Action 3</el-dropdown-item>
                        <el-dropdown-item disabled>Action 4</el-dropdown-item>
                        <el-dropdown-item divided>Action 5</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </el-header>
</template>
<script>
export default{
    setup(){
        //写一个函数实现静态资源的引入
        const getImgSrc =(user)=>{
            return new URL (`../assets/image/${user}.png`, import.meta.url).href;
        };
        return{
            getImgSrc,
        };
    }
}
</script>
<style lang="less" scoped>
.el-header{
    --el-header-padding: 0 0;
    display: flex;
    justify-content: space-between;
    align-items:center;
    width: 100%;
    height: 100%;
    padding-top: 0px;
    padding-right: 20px;
    padding-bottom: 0px;
    padding-left: 0px;
    background-color: #333;
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
}


</style>