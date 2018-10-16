import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import { getToken } from '@/utils/auth'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style

Vue.use(Router)

const LOGIN_VIEW_NAME = 'login'
const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start()
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
  NProgress.done()
})

export default router
