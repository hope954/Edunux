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
                    <!-- <el-menu-item index="1-2">item two</el-menu-item> -->
                </el-menu-item-group>
                <!-- <el-sub-menu index="1-4">
                <template #title>item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
                </el-sub-menu> -->
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
                path: "/home",
                name: "home",
                label: "首页",
                icon: "s-home",
                url: "Home/Home"
            },
            {
                label: "知识库",
                icon: "video-play",
                children: [
                    {
                        path: "/knowledge/model",
                        name: "knowledgeModel",
                        label: "理论模型",
                        icon: "setting"
                    },
                    {
                        path: "/knowledge/ways",
                        name: "knowledgeWays",
                        label: "方法",
                        icon: "setting"
                    },
                    {
                        path: "/knowledge/indicator",
                        name: "knowledgeIndicator",
                        label: "指标体系",
                        icon: "setting"
                    }
                ]
            },
            {
                label: "调查量表",
                icon: "user",
                children: [
                    {
                        path: "/search/start",
                        name: "searchStart",
                        label: "量表首页",
                        icon: "setting"
                    },
                    {
                        path: "/search/content",
                        name: "searchContent",
                        label: "量表内容",
                        icon: "setting"
                    },
                    // {
                    //     path: "/search/result",
                    //     name: "searchResult",
                    //     label: "量表结果",
                    //     icon: "setting"
                    // }
                ]
            },
            {
                label: "项目概况",
                icon: "location",
                children: [
                    {
                        path: "/project/source",
                        name: "projectSource",
                        label: "项目来源",
                        icon: "setting"
                    },
                    {
                        path: "/project/week",
                        name: "projectWeek",
                        label: "项目规划",
                        icon: "setting"
                    },
                    {
                        path: "/project/member",
                        name: "projectMember",
                        label: "项目组成员",
                        icon: "setting"
                    },
                    {
                        path: "/project/teacher",
                        name: "projectTeacher",
                        label: "项目指导教师",
                        icon: "setting"
                    },
                    {
                        path: "/project/result",
                        name: "projectResult",
                        label: "项目成果",
                        icon: "setting"
                    }
                ]
            },
            {
                path: "/user",
                name: "user",
                label: "用户",
                icon: "user"
            }
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
//   height:100%;
  overflow: auto;
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