import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Account from '@/components/Account'
import Contact from '@/components/Contact'
import Friends from '@/components/HelloWorld'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/friends/:id/:age/:weight',
    name: 'Friends',
    component: Friends
  }


]

const router = new VueRouter({
  routes
})

export default router
