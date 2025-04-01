import { componentSizes } from "element-plus";
import { createRouter , createWebHashHistory } from "vue-router"; //引入
//定义routes和下面的内容页面
const routes =[
    {
        path:'/',
        component:()=>import('../pages/main.vue'),
        children:[
            {
                path:'/',
                name:'home',
                component:()=>import('../pages/home/home.vue')
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