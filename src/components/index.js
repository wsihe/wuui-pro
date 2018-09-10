import Card from './card'
import CardGrid from './card-grid'
import Chart from './charts'

const components = [
  Card,
  CardGrid,
  Chart
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
  Card,
  CardGrid,
  Chart,
  install
}
