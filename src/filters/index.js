import numeral from 'numeral'
import Vue from 'vue'
import dates from './dates'

const normals = {
  /**
   * @filter 金额filter
   * @params val      {Number, String}    数字，未转化的
   * @params [formatStr]     {String}     转化规则，默认'0,0'
   */
  yuan (val, formatStr = '0,0') {
    return `¥ ${numeral(val).format(formatStr)}`
  },
  numFormat (val, formatStr = '0,0') {
    return `${numeral(val).format(formatStr)}`
  }
}

export default function () {
  const filters = {
    ...normals,
    ...dates
  }

  Object.keys(filters).forEach((key) => {
    Vue.filter(key, filters[key])
  })
}
