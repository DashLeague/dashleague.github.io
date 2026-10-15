import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue"
import MatchView from "../views/MatchesView.vue"
import MatchPageView from "../views/MatchPageView.vue"
import PlayerPageView from "../views/PlayerPageView.vue"
import TeamPageView from "../views/TeamPageView.vue"
import ChampView from "../views/HallOfChampions.vue"
import Error404View from "../views/Error404View.vue"

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
  },
  {
    path: "/match/:matchID",
    name: "match page",
    component: MatchPageView,
    props: true
  },
  {
    path: "/team/:teamID",
    name: "team page",
    component: TeamPageView,
    props: true
  },
  {
    path: "/player/:playerID",
    name: "player page",
    component: PlayerPageView,
    props: true
  },
  {
    path: "/hall-of-champions",
    name: "hall of champions",
    component: ChampView
  },
  {
    path: '/:pathMatch(.*)*',
    name: "error 404",
    component: Error404View
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
