<template>
    <el-aside width="200px" >
        <el-menu class="el-menu-vertical-demo" background-color="#9fa1a4" text-color="#fff">
            <el-menu-item :index="item.path" v-for="item in noChildren()" :key="item.path">
                <component class="icons" :is="item.icon"></component>
                <span>{{ item.label }}</span>
            </el-menu-item>
            <el-sub-menu :index="item.label" v-for="item in hasChildren()" :key="item.path">
                <template #title>
                    <component class="icons" :is="item.icon"></component>
                    <span>{{ item.label }}</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item :index="subItem.path" v-for="(subItem,subIndex) in item.children" :key="subIndex">
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
        //两个方法，判断是否有二级菜单
        const noChildren = () =>{
            return list.filter((item)=>!item.children);
        };
        const hasChildren = () =>{
            return list.filter((item)=>item.children);
        };
        return {
            noChildren,
            hasChildren,
        };
    }
}
</script>
<style scoped>
.icons{
    width: 16px;
    height: 16px;
    /* background-color: #9fa1a4; */
}
</style>