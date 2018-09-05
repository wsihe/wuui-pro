
const common = {
  state: {
    opened: true
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
    }
  },
  actions: {
  }
}

export default common
