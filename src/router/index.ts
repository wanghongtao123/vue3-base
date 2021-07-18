import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

export const constantRoutes: Array<RouteRecordRaw> = [
  // {
  //   path: "/login",
  //   component: () => import("@/views/login"),
  //   hidden: true,
  // },
  {
    path: "/403",
    name: "403",
    component: () => import("@/views/403.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/Login.vue"),
  },
];

const Home = () => import("@/views/home/index");
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  ...constantRoutes,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
