import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue"
import MatchView from "../views/MatchesView.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/matches",
    name: "matches",
    component: MatchView
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
