import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import authRequired from '../utils/authRequired'
import adminAccess from '../utils/adminAccess'
import cookAccess from '../utils/cookAccess'
import recipientAccess from '../utils/recipientAccess'
Vue.use(VueRouter)

const routes = [{
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
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/cook',
    name: 'Cook',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/Cook.vue'),
    beforeEnter: cookAccess
  },
  {
    path: '/recipient',
    name: 'Recipient',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/Recipient.vue'),
    beforeEnter: recipientAccess,
  },
  {
    path: '/admin',
    name: 'Admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/Admin.vue'),
    beforeEnter: adminAccess,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router