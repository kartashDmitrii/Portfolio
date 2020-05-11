import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Portfolio from '../views/Portfolio.vue'
import Error from '../views/Error.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    // route level code-splitting
    // this generates a separate chunk (portfolio.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "portfolio" */ '../views/Portfolio.vue')
    component: Portfolio,
  },
  {
    path: '*',
    name: 'Error',
    component: Error
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'on',
  linkExactActiveClass: 'active',
  mode: 'history'
})

export default router
