import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Register from '../views/Register'
import Index from '../views/Index'
import Home from '../views/Home'
import Me from '../views/Me'
import ModifyPassword from '../views/ModifyPassword'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  }, {
    path: '/register',
    component: Register
  }, {
    path: '/index',
    component: Index,
    children: [{
      path: '/index/home',
      component: Home,
    }, {
      path: '/index/me',
      component: Me,
    }]
  }, {
    path: '/modify_password',
    component: ModifyPassword
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
