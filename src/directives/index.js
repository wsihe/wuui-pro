import Vue from 'vue'
import clickoutside from './clickoutside'

export default function () {
  const directives = {
    ...clickoutside
  }
  Object.keys(directives).forEach((key) => {
    Vue.directive(key, directives[key])
  })
}
