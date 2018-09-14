
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
        path: 'addProduct',
        name: 'addProduct',
        component: () => import('@/views/product/addProduct.vue'),
        meta: { title: '添加商品' }
      },
      {
        path: 'products',
        name: 'products',
        component: () => import('@/views/product/products.vue'),
        meta: { title: '商品列表' }
      },
      {
        path: 'basicOrder',
        name: 'basicOrder',
        component: () => import('@/views/order/basicOrder.vue'),
        meta: { title: '订单概况' }
      },
      {
        path: 'orders',
        name: 'orders',
        component: () => import('@/views/order/orders.vue'),
        meta: { title: '订单列表' }
      }
    ]
  }
]
