// import { createRouter,createWebHistory } from "vue-router";

// const router = createRouter(
//     {
//         history : createWebHistory(),
//         routes :[
//             {
//                 path:'/',
//                 name:'Login',
//                 component : () => import('../dashboard/Auth/login.vue')
//             },
//             {
//                 path:'/forget-password',
//                 name:'Forget',
//                 component : () => import('../dashboard/Auth/forget.vue')
//             },
//             {
//                 path:'/dash',
//                 name:'Dashborad',
//                 component : () => import('../dashboard/layout/dashApp.vue')
//             },
//         ]
//     }
// )
// export default router


import { createRouter, createWebHistory } from "vue-router";
import WebsiteLayout from "../dashboard/Auth/layout.vue";
import DashboardLayout from "../dashboard/layout/dashApp.vue";

const routes = [
  {
    path: "/",
    component: WebsiteLayout,
    children: [
        {
            path:'',
            name:'Login',
            component : () => import('../dashboard/Auth/login.vue')
        },
        {
            path:'forget-password',
            name:'Forget',
            component : () => import('../dashboard/Auth/forget.vue')
        },
    ],
  },
  {
    path: "/dashboard",
    component: DashboardLayout,
    children: [
        {
            path:'',
            name:'Dashborad',
            component : () => import('../dashboard/layout/dashApp.vue')
        },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
