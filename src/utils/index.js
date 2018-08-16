
/**
 * 判断是否服务端渲染
 * @return {boolean}
 */
export function isServer () {
  return Vue.prototype.$isServer
}

/**
 * 去除字符串首尾空格
 * @param string
 * @return {string}
 */
export function trim (string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')
}