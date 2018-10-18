import { getBreadCrumbs } from '@/utils'

const common = {
  state: {
    opened: true,
    homeRoute: {
      name: 'home',
      title: '首页'
    },
    breadCrumbList: []
  },
  mutations: {
    TOGGLE_SIDER (state) {
      state.opened = !state.opened
    },
    CLOSE_SIDER (state) {
      state.opened = false
    },
    OPEN_SIDER (state) {
      state.opened = true
    },
    SET_BREADCRUMB (state, route) {
      state.breadCrumbList = getBreadCrumbs(route, state.homeRoute)
    }
  },
  actions: {
  }
}

export default common
