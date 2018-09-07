import { isUrl } from '@/utils'

const menuData = [
  {
    name: '首页',
    icon: 'menu',
    path: 'home_index'
  },
  {
    name: '商品管理',
    icon: 'tickets',
    path: 'home',
    children: [
      {
        name: '添加商品',
        path: 'basicForm'
      },
      {
        name: '商品列表',
        path: 'stepForm'
      }
    ]
  },
  {
    name: '订单中心',
    icon: 'document',
    path: 'list',
    children: [
      {
        name: '订单概况',
        path: 'basicList'
      },
      {
        name: '订单列表',
        path: 'cardist'
      }
    ]
  },
  {
    name: '数据管理',
    icon: 'news',
    path: 'profile',
    children: [
      {
        name: '数据概况',
        path: 'basic'
      },
      {
        name: '商品分析',
        path: 'advanced1'
      },
      {
        name: '客户分析',
        path: 'advanced2'
      }
    ]
  },
  {
    name: '客户信息',
    icon: 'search',
    path: 'exception',
    children: [
      {
        name: '客户列表',
        path: 'customers'
      }
    ]
  },
  {
    name: '个人中心',
    icon: 'setting',
    path: 'result',
    children: [
      {
        name: '基本信息',
        path: 'success'
      },
      {
        name: '设置',
        path: 'fail'
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
