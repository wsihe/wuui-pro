
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
        meta: { title: 'home' }
      },
      {
        path: 'basicForm',
        name: 'basicForm',
        component: () => import('@/views/form/basicForm.vue'),
        meta: { title: '基本表单' }
      },
      {
        path: 'stepForm',
        name: 'stepForm',
        component: () => import('@/views/form/stepForm.vue'),
        meta: { title: '分步表单' }
      },
      {
        path: 'basicList',
        name: 'basicList',
        component: () => import('@/views/list/basicList.vue'),
        meta: { title: '标准列表' }
      },
      {
        path: 'cardList',
        name: 'cardList',
        component: () => import('@/views/list/cardList.vue'),
        meta: { title: '卡片列表' }
      }
    ]
  }
]
