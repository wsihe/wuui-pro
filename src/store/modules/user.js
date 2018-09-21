import { login, logout } from '@/services/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
const user = {
  state: {
    name: '',
    token: getToken(),
    msg: ''
  },
  mutations: {
    SET_USER_NAME (state, name) {
      state.name = name
    },
    SET_TOKEN (state, token) {
      state.token = token
      setToken(token)
    }
  },
  actions: {
    async LoginIn ({commit}, {username, password}) {
      let res = await login(username, password)
      if (res.status === 'ok' && res.data) {
        commit('SET_USER_NAME', res.data.name)
        commit('SET_TOKEN', res.data.token)
      }
    },
    async Logout ({commit}) {
      await logout()
      commit('SET_TOKEN', '')
      removeToken()
    }
  }
}

export default user
