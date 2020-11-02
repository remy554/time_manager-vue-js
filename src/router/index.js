import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../components/Profile.vue')
  },
  {
    path: '/manager',
    name: 'manager',
    component: () => import('../components/dashboards/ManagerDashboard.vue')
  },
  {
    path: '/generalManager',
    name: 'generalManager',
    component: () => import('../components/dashboards/GeneralManagerDashboard.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../components/dashboards/UserDashboard.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
