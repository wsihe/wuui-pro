import { isUrl } from '@/utils'

const menuData = [
  {
    name: '首页',
    icon: 'menu',
    path: 'home/index'
  },
  {
    name: '表单页',
    icon: 'tickets',
    path: 'form',
    children: [
      {
        name: '基础表单',
        path: 'basic-form'
      },
      {
        name: '分步表单',
        path: 'step-form'
      }
    ]
  },
  {
    name: '列表页',
    icon: 'document',
    path: 'list',
    children: [
      {
        name: '标准列表',
        path: 'basic-list'
      },
      {
        name: '卡片列表',
        path: 'card-list'
      }
    ]
  },
  {
    name: '详情页',
    icon: 'news',
    path: 'profile',
    children: [
      {
        name: '基础详情页',
        path: 'basic'
      },
      {
        name: '高级详情页',
        path: 'advanced',
        authority: 'admin'
      }
    ]
  },
  {
    name: '结果页',
    icon: 'setting',
    path: 'result',
    children: [
      {
        name: '成功',
        path: 'success'
      },
      {
        name: '失败',
        path: 'fail'
      }
    ]
  },
  {
    name: '异常页',
    icon: 'warning',
    path: 'exception',
    children: [
      {
        name: '403',
        path: '403'
      },
      {
        name: '404',
        path: '404'
      },
      {
        name: '500',
        path: '500'
      },
      {
        name: '触发异常',
        path: 'trigger',
        hideInMenu: true
      }
    ]
  }
]

function formatter (data, parentPath = '/', parentAuthority) {
  return data.map(item => {
    let { path } = item
    if (!isUrl(path)) {
      path = parentPath + item.path
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
