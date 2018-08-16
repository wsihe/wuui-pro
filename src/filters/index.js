import Vue from 'vue'
import dates from './dates'

export default function () {
  const filters = {
    ...dates
  }

  Object.keys(filters).forEach((key) => {
    Vue.filter(key, filters[key])
  })
}
