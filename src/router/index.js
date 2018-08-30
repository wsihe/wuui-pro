import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import { getToken } from '@/utils/auth'

Vue.use(Router)

const LOGIN_VIEW_NAME = 'login'
const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  const token = getToken()
  if (!token && to.name !== LOGIN_VIEW_NAME) {
    next({
      name: LOGIN_VIEW_NAME
    })
  } else {
    next()
  }
})

router.afterEach((to, from) => {
})

export default router
