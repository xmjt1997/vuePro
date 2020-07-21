import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const Home = () => import('../layouts/Home.vue')

// import Home from '@/layouts/Home.vue'
// import Reg from '@/components/user/reg.vue'
// import Login from '@/components/user/login.vue'
const Society = () => import('../layouts/Society.vue')

// import Society from '@/layouts/Society.vue'
const User = () => import('../layouts/User.vue')
// import User from '@/layouts/User.vue'
const Details = () => import('../layouts/Details.vue')
// import Details from '@/layouts/Details.vue'
const Money = () => import('../layouts/Money.vue')
// import Money from '@/layouts/Money.vue'
const Recreation = () => import('../layouts/Recreation.vue')
// import Recreation from '@/layouts/Recreation.vue'
const Inter = () => import('../layouts/Inter.vue')
// import Inter from '@/layouts/Inter.vue'
const Preson = () => import('../layouts/Preson.vue')
// import Preson from '@/layouts/Preson.vue'





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
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
