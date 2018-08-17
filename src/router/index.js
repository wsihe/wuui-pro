import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/home/index',
      meta: {}
    },
    {
      path: '/login',
      name: 'login',
      title: '登录',
      meta: {},
      component: () => import('@/views/login.vue'),
    },
    {
      path: '/home',
      component: Layout,
      redirect: '/home/index',
      children: [
        {
          path: 'index',
          name: 'home_index',
          component: () => import('@/views/Home.vue'),
          meta: { title: 'home', icon: 'home' }
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('@/views/About.vue'),
          meta: { title: 'about', icon: 'about' }
        }
      ]
    }
  ]
})
