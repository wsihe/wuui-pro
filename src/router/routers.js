
import Main from '@/views/Main'

export default [
  {
    path: '/login',
    name: 'login',
    title: '登录',
    meta: {},
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/default',
    name: '_default',
    component: Main,
    children: [
      {
        path: 'index',
        name: 'default',
        component: () => import('@/views/default/default.vue'),
        meta: {
          title: '新页签',
          hideHeader: true
        }
      }
    ]
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {},
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home/Home.vue'),
        meta: {
          title: '首页',
          hideHeader: true
        }
      }
    ]
  },
  {
    path: '/product',
    name: 'product',
    meta: {
      title: '商品管理'
    },
    component: Main,
    children: [
      {
        path: 'add',
        name: 'addProduct',
        component: () => import('@/views/product/addProduct.vue'),
        meta: { title: '添加商品' }
      },
      {
        path: 'list',
        name: 'products',
        component: () => import('@/views/product/products.vue'),
        meta: { title: '商品列表' }
      }
    ]
  },
  {
    path: '/order',
    name: 'order',
    meta: {
      title: '订单中心'
    },
    component: Main,
    children: [
      {
        path: 'overview',
        name: 'basicOrder',
        component: () => import('@/views/order/basicOrder.vue'),
        meta: { title: '订单概况' }
      },
      {
        path: 'list',
        name: 'orders',
        component: () => import('@/views/order/orders.vue'),
        meta: { title: '订单列表' }
      }
    ]
  },
  {
    path: '/customer',
    name: 'customer',
    meta: {
      title: '客户信息'
    },
    component: Main,
    children: [
      {
        path: 'list',
        name: 'customers',
        component: () => import('@/views/customer/customers.vue'),
        meta: { title: '客户列表' }
      }
    ]
  },
  {
    path: '/analysis',
    name: 'analysis',
    meta: {
      title: '数据分析'
    },
    component: Main,
    children: [
      {
        path: 'overview',
        name: 'basicAnalysis',
        component: () => import('@/views/analysis/basicAnalysis.vue'),
        meta: { title: '数据概览' }
      }
    ]
  },
  {
    path: '/setting',
    name: 'shop',
    meta: {
      title: '微店设置'
    },
    component: Main,
    children: [
      {
        path: 'index',
        name: 'setting',
        component: () => import('@/views/setting/setting.vue'),
        meta: { title: '微店设置' }
      }
    ]
  },
  {
    path: '/user',
    name: 'center',
    meta: {
      title: '个人中心'
    },
    component: Main,
    children: [
      {
        path: 'index',
        name: 'user',
        component: () => import('@/views/user/user.vue'),
        meta: { title: '个人设置' }
      }
    ]
  }
]
