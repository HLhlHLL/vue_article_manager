import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
import { getItem } from '@/utils/localStorage.js'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const token = getItem('token')
  if (!token && to.path.includes('/home')) {
    next('/login')
  } else {
    next()
  }
})

export default router
