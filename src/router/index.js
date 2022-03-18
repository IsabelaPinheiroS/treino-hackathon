import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../view/HomeView'
import UniversidadesLista from '../view/UniversidadesLista'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/UniversidadesLista',
    name: 'UniversidadesLista',
    component: UniversidadesLista
  },

]

const router = new VueRouter({
  routes
})

export default router
