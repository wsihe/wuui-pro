import Card from './card'
import Affix from './affix'
import CardGrid from './card-grid'
import Chart from './charts'
import ChartCard from './chart-card'
import Icon from './icon'
import Design from './design'
import Result from './result'
import Pagination from './pagination'
import Divider from './divider'

const components = [
  Card,
  Affix,
  CardGrid,
  Chart,
  ChartCard,
  Icon,
  Design,
  Result,
  Pagination,
  Divider
]

const install = function (Vue, opts = {}) {
  if (install.installed) return
  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '0.0.1',
  Card,
  Affix,
  CardGrid,
  Chart,
  ChartCard,
  Icon,
  Design,
  Result,
  Pagination,
  Divider,
  install
}
