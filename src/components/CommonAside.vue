<template>
    <el-aside :width="$store.state.isCollapse?'180px':'64px'">
        <el-menu class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" :collapse="!$store.state.isCollapse" :collapse-transition="false">
          <h3 v-show="$store.state.isCollapse">Edunux双创管理</h3>  
          <h3 v-show="!$store.state.isCollapse">Edunux</h3>
          <el-menu-item :index="item.path" v-for="item in noChildren()" :key="item.path" @click="clickMenu(item)">
                <component class="icons" :is="item.icon"></component>
                <span>{{ item.label }}</span>
            </el-menu-item>
            <el-sub-menu :index="item.label" v-for="item in hasChildren()" :key="item.path">
                <template #title>
                    <component class="icons" :is="item.icon"></component>
                    <span>{{ item.label }}</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item :index="subItem.path" v-for="(subItem,subIndex) in item.children" :key="subIndex"  @click="clickMenu(subItem)">
                        <component class="icons" :is="subItem.icon"></component>
                        <span>{{ subItem.label }}</span>
                    </el-menu-item>
                    <el-menu-item index="1-2">item two</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                <template #title>item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
      </el-menu>
    </el-aside>
</template>
<script>
import {useRouter} from 'vue-router' 
export default{
    setup(){
        const list = [
        {
          path: "/",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "Home/Home",
        },
        {
          path: "/mall",
          name: "mall",
          label: "商品管理",
          icon: "video-play",
          url: "MallManage/MallManage",
        },
        {
          path: "/user",
          name: "user",
          label: "用户管理",
          icon: "user",
          url: "UserManage/UserManage",
        },
        {
          label: "其他",
          icon: "location",
          children: [
            {
              path: "/page1",
              name: "page1",
              label: "首页",
              icon: "setting",
              url: "Other/PageOne",
            },
            {
              path: "/page2",
              name: "page2",
              label: "首页",
              icon: "setting",
              url: "Other/PageTwo",
            },
          ],
        },
        ];
        const router =useRouter();
        //两个方法，判断是否有二级菜单
        const noChildren = () =>{
            return list.filter((item)=>!item.children);
        };
        const hasChildren = () =>{
            return list.filter((item)=>item.children);
        };
        const clickMenu = (item ) =>{
            router.push({
              name:item.name,
            });

        };
        return {
            noChildren,
            hasChildren,
            clickMenu,
        };
    }
}
</script>
<style lang="less" scoped>
// .el-aside{
//   width: 200px;
// } 
.icons{
    width: 16px;
    height: 16px;
    /* background-color: #9fa1a4; */
}
.el-menu-vertical-demo{
  height: 2000px;
  background-color:#545c64;
}
.el-menu{
  border: none;
  h3{
    line-height: 48px;
    color: #fff;
    text-align: center;
    margin-top: 10px;
  }
}
</style>