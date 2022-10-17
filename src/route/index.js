import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Index",
      redirect: "/num1",
    },
    {
      path: "/num1",
      name: "num1",
      component: () => import("../views/Num1.vue"),
    },
  ],
})

export default router
