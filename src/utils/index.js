const CHARS = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('')
const NUMBER_CHARS = '0123456789'.split('')
/**
 * 用于产生指定长度的随机 UUID
 * @param len [UUID长度]
 * @param onlyNumber [是否全为数字]
 * @return {string}
 */
export function uuid (len, onlyNumber) {
  const chars = onlyNumber ? NUMBER_CHARS : CHARS
  let uuid = []
  let radix = chars.length
  let i
  if (len) {
    for (i = 0; i < len; i++) { uuid[i] = chars[0 | Math.random() * radix] }
  } else {
    let r

    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
    uuid[14] = '4'

    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | Math.random() * 16
        uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r]
      }
    }
  }
  return uuid.join('')
}

/**
 * @param {String} url
 * @description 从URL中解析参数
 */
export const getParams = url => {
  const keyValueArr = url.split('?')[1].split('&')
  let paramObj = {}
  keyValueArr.forEach(item => {
    const keyValue = item.split('=')
    paramObj[keyValue[0]] = keyValue[1]
  })
  return paramObj
}

/**
 * 去除字符串首尾空格
 * @param string
 * @return {string}
 */
export function trim (string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')
}

/* eslint no-useless-escape:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/

export function isUrl (path) {
  return reg.test(path)
}

/**
 * 判断指定值是否object类型，且排除null值
 * @param value
 * @return {boolean}
 */
export function isObject (value) {
  return value !== null && typeof value === 'object'
}

/**
 * 判断一个对象是否空的
 * @param obj
 * @param [excludeInherited=true] 是否排除非原型属性
 * @returns {boolean}
 */
export function isEmpty (obj, excludeInherited) {
  if (!obj || !isObject(obj)) { return true }
  excludeInherited = excludeInherited !== false
  for (var key in obj) {
    if ((excludeInherited && obj.hasOwnProperty(key)) || !excludeInherited) { return false }
  }
  return true
}

/**
 * 将route转化为面包屑
 * Convert route into breadcrumbs
 */
export const getBreadCrumbs = (route, homeRoute) => {
  let routes = route.matched
  let breadcrumbs = routes.reduce((list, item) => {
    if (item.meta !== undefined && !item.meta.hideHeader) {
      list.push({
        name: item.name,
        title: item.meta.title || '',
        meta: item.meta
      })
    }
    return list
  }, [{...homeRoute}])
  return breadcrumbs
}

export function debounce (func, wait, immediate) {
  let timeout, args, context, timestamp, result

  const later = function () {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function (...args) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}
