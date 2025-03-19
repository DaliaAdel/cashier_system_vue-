import { createRouter, createWebHistory } from "vue-router";
import WebsiteLayout from "../dashboard/Auth/layout.vue";
// import DashboardLayout from "../dashboard/layout/dashboardLayout.vue";
import DashboardLayout from "../dashboard/layout/dashApp.vue";



const routes = [
  {
    path: "/",
    component: WebsiteLayout,
    children: [
      {
        path: "",
        name: "Login",
        component: () => import("../dashboard/Auth/login.vue"),
      },
      {
        path: "forget-password",
        name: "Forget",
        component: () => import("../dashboard/Auth/forget.vue"),
      },
    ],
  },
  {
    path: "/dashboard",
    component: DashboardLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: () => import('../dashboard/layout/home.vue'),
      },
      {
        path:'menu',
        name:'Menu',
        component : () => import('../dashboard/layout/menu.vue'),
    }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
