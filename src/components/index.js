import card from './card'

const components = [
  card
]

const install = function (Vue, opts = {}) {
  if (install.installed) return
  components.map(component => {
    console.log(component.name)
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '0.0.1',
  card,
  install
}
