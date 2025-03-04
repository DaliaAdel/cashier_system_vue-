import { createRouter,createWebHistory } from "vue-router";

const router = createRouter(
    {
        history : createWebHistory(),
        routes :[
            {
                path:'/dash',
                name:'Dashborad',
                component : () => import('../dashboard/layout/dashApp.vue')
            },
            // {
            //     path:'/forget-password',
            //     name:'Forget',
            //     component : () => import('../dashboard/Auth/forget.vue')
            // }
        ]
    }
)
export default router
