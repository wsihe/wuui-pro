import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import initFilters from './filters'
import initDirectives from './directives'
import globalMix from './mixins/globalMix'
import './plugins/element.js'
import './mock'

Vue.config.productionTip = false

Vue.mixin(globalMix)

initFilters()
initDirectives()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
