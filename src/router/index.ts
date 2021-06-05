import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

export const constantRoutes = [
  // {
  //   path: "/login",
  //   component: () => import("@/views/login"),
  //   hidden: true,
  // },
  {
    path: "/403",
    name: "403",
    component: () => import("@/views/403.vue"),
    hidden: true,
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404.vue"),
    hidden: true,
  },
];

const Home = () => import("@/views/home/index");
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
