import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/layouts/Home.vue'
// import Reg from '@/components/user/reg.vue'
// import Login from '@/components/user/login.vue'
import Society from '@/layouts/Society.vue'
import User from '@/layouts/User.vue'
import Details from '@/layouts/Details.vue'
import Money from '@/layouts/Money.vue'
import Recreation from '@/layouts/Recreation.vue'
import Inter from '@/layouts/Inter.vue'
import Preson from '@/layouts/Preson.vue'





const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  {
    path: '/user', name: 'user', component: User,
    beforeEnter: (to, from, next) => {
      if (sessionStorage.getItem('username')) {
        next('/preson')
      }
      else next()
    },
  },
  { path: '/details/:id', component: Details },
  { path: '/society', component: Society },
  { path: '/recreation', component: Recreation },
  { path: '/money', component: Money },
  { path: '/inter', component: Inter },
  { path: '/preson', component: Preson }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
