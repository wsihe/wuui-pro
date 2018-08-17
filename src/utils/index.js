
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
 * @description 判断是否服务端渲染
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