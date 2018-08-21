import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from './modules/moduleA'
import moduleB from './modules/moduleB'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    moduleA,
    moduleB
  }
})

export default store
