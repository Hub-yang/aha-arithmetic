import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import router from "./router"

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
    next()
  }
})

const app = createApp(App)

app.directive("focus", {
  mounted(el) {
    el.focus()
  },
})

app.use(router).mount("#app")
