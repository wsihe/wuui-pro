import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common'
import user from './modules/user'
import product from './modules/product'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    common,
    user,
    product
  },
  getters
})

export default store
