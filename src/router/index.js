import { componentSizes } from "element-plus";
import { createRouter , createWebHashHistory } from "vue-router"; //引入
//定义routes和下面的内容页面
// const routes =[
//     {
//         path:'/',
//         component:()=>import('../pages/main.vue'),
//         redirect:'/home',
//         children:[
//             {
//                 path:'/home',
//                 name:'home',
//                 component:()=>import('../pages/home/home.vue')
//             },
//             {
//                 path:'/konwledge',
//                 name:'konwledge',
//                 component:()=>import('../pages/knowledge')
//             },
//             {
//                 path:'/project',
//                 name:'project',
//                 component:()=>import('../pages/search')
//             },
//             {
//                 path:'/search',
//                 name:'search',
//                 component:()=>import('../pages/search')
//             }
//         ]

//     }
// ]
const routes = [
    {
        path: '/',
        component: () => import('../pages/main.vue'),
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('../pages/home/home.vue')
            },
            {
                path: '/knowledge',
                name: 'knowledge',
                component: () => import('../pages/knowledge/index.vue'), // 明确指定文件
                children: [
                    {
                        path: 'model',
                        name: 'knowledgeModel',
                        component: () => import('../pages/knowledge/model.vue')
                    },
                    {
                        path: 'ways',
                        name: 'knowledgeWays',
                        component: () => import('../pages/knowledge/ways.vue')
                    },
                    {
                        path: 'indicator',
                        name: 'knowledgeIndicator',
                        component: () => import('../pages/knowledge/indicator.vue')
                    }
                ]
            },
            {
                path: '/project',
                name: 'project',
                component: () => import('../pages/project/index.vue'), // 明确指定文件
                children: [
                    {
                        path: 'member',
                        name: 'projectMember',
                        component: () => import('../pages/project/member.vue')
                    },
                    {
                        path: 'result',
                        name: 'projectResult',
                        component: () => import('../pages/project/result.vue')
                    },
                    {
                        path: 'teacher',
                        name: 'projectTeacher',
                        component: () => import('../pages/project/teacher.vue')
                    },
                    {
                        path: 'source',
                        name: 'projectSource',
                        component: () => import('../pages/project/source.vue')
                    },
                    {
                        path: 'week',
                        name: 'projectWeek',
                        component: () => import('../pages/project/week.vue')
                    }
                ]
            },
            {
                path: '/search',
                name: 'search',
                component: () => import('../pages/search/index.vue'), // 明确指定文件
                children: [
                    {
                        path: 'result',
                        name: 'searchStart',
                        component: () => import('../pages/search/start.vue')
                    },
                    {
                        path: 'content',
                        name: 'searchContent',
                        component: () => import('../pages/search/content.vue')
                    },
                    {
                        path: 'index',
                        name: 'searchIndex',
                        component: () => import('../pages/search/index.vue')
                    },
                    // {
                    //     path: 'result',
                    //     name: 'searchResult',
                    //     component: () => import('../pages/search/result.vue'),
                    //     props:true
                    // }
                    
                ]
            },
            {
                path: '/user',
                name: 'user',
                component: () => import('../pages/user/user.vue')
            }
        ]
    }
];

//定义router，调用routes
const router = createRouter({
    history : createWebHashHistory(),
    routes 
})

export default router   //导出路由 