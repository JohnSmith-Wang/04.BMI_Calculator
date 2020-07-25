import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Bmi from '../views/Bmi.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect:'/home'

  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/bmi',
    name: 'Bmi',
    component: Bmi
  },

]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})

export default router
