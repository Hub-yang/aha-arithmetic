import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/num1",
    },
    {
      path: "/num1",
      name: "num1",
      meta: { title: "简单桶排序" },
      component: () => import("../views/Num1.vue"),
    },
  ],
})

export default router
