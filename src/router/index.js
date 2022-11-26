import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/num3",
    },
    {
      path: "/num1",
      name: "num1",
      meta: { title: "简单桶排序" },
      component: () => import("../views/Num1.vue"),
    },
    {
      path: "/num2",
      name: "num2",
      meta: { title: "冒泡排序" },
      component: () => import("../views/Num2.vue"),
    },
    {
      path: "/num3",
      name: "num3",
      meta: { title: "快速排序" },
      component: () => import("../views/Num3.vue"),
    },
  ],
})

export default router
