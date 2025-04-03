import { componentSizes } from "element-plus";
import { createRouter , createWebHashHistory } from "vue-router"; //引入
//定义routes和下面的内容页面
const routes =[
    {
        path:'/',
        component:()=>import('../pages/main.vue'),
        redirect:'/home',
        children:[
            {
                path:'/home',
                name:'home',
                component:()=>import('../pages/home/home.vue')
            },
            {
                path:'/user',
                name:'user',
                component:()=>import('../pages/user/user.vue')
            },
            {
                path:'/page1',
                name:'page1',
                component:()=>import('../pages/page1.vue')
            },
            {
                path:'/page2',
                name:'page2',
                component:()=>import('../pages/page2.vue')
            }
        ]

    }
]

//定义router，调用routes
const router = createRouter({
    history : createWebHashHistory(),
    routes 
})

export default router   //导出路由 