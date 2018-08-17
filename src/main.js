import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import initFilters from './filters'
import initDirectives from './directives'
import './plugins/element.js'

Vue.config.productionTip = false

initFilters()
initDirectives()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
