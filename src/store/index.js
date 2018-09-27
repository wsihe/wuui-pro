import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import common from './modules/common'
import user from './modules/user'
import product from './modules/product'
import tabMenu from './modules/tabMenu'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    common,
    user,
    product,
    tabMenu
  },
  getters
})

export default store
