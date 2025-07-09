import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import BasicLayout from "@/layouts/BasicLayout.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import AboutView from "@/views/AboutView.vue";
import HomeView from "@/views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/user/login",
    name: "user-login",
    component: HomeView,
  },
  {
    path: "/user/register",
    name: "user-register",
    component: HomeView,
  },
  {
    path: "/user/userManage",
    name: "user-manage",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
