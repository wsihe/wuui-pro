
import Main from '@/views/Main'

export default [
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
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/home',
    component: Main,
    redirect: '/home/index',
    children: [
      {
        path: 'index',
        name: 'home_index',
        component: () => import('@/views/home/Home.vue'),
        meta: { title: 'home', icon: 'home' }
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views//home/About.vue'),
        meta: { title: 'about', icon: 'about' }
      }
    ]
  }
]
