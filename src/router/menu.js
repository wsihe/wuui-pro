import { isUrl } from '@/utils'

const menuData = [
  {
    name: '首页',
    icon: 'menu',
    path: 'home'
  },
  {
    name: '商品管理',
    icon: 'tickets',
    path: 'product',
    children: [
      {
        name: '添加商品',
        path: 'addProduct'
      },
      {
        name: '商品列表',
        path: 'products'
      }
    ]
  },
  {
    name: '订单中心',
    icon: 'document',
    path: 'order',
    children: [
      {
        name: '订单概况',
        path: 'basicOrder'
      },
      {
        name: '订单列表',
        path: 'orders'
      }
    ]
  },
  {
    name: '数据分析',
    icon: 'news',
    path: 'analysis',
    children: [
      {
        name: '数据概况',
        path: 'basicAnalysis'
      }
    ]
  },
  {
    name: '客户信息',
    icon: 'search',
    path: 'customer',
    children: [
      {
        name: '客户列表',
        path: 'customers'
      }
    ]
  },
  {
    name: '微店设置',
    icon: 'setting',
    path: 'shopSetting',
    children: [
      {
        name: '展示设置',
        path: 'setting'
      }
    ]
  },
  {
    name: '个人中心',
    icon: 'refresh',
    path: 'userCenter',
    children: [
      {
        name: '个人设置',
        path: 'user'
      }
    ]
  }
]

function formatter (data, parentPath = '/', parentAuthority) {
  return data.map(item => {
    let { path } = item
    if (!isUrl(path)) {
      // path = parentPath + item.path
      path = item.path
    }
    const result = {
      ...item,
      path,
      leaf: !item.children,
      authority: item.authority || parentAuthority
    }
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority)
    }
    return result
  })
}

export const getMenuData = () => formatter(menuData)
