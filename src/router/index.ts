import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../components/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/sample",
    name: "sample",
    component: () => import("../components/helpPages/Sample.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
