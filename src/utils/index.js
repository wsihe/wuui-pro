
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
