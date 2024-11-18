import { createRouter, createWebHashHistory } from 'vue-router'

import App from '../App.vue'
import HomeView from '../views/HomeView.vue'
import RileyReidView from '../views/RileyReidView.vue'
import PIperPerriView from '../views/PIperPerriView.vue'
import GangBangView from '../views/GangBangView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/riley-reid', component: RileyReidView },
  { path: '/piper-perri', component: PIperPerriView },
  { path: '/gang-bang', component: GangBangView }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  App,
})

export default router;
