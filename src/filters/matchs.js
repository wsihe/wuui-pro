/**
 * @desc 常用编码转中文
 */

export default {
  productGroup (type) {
    let map = {
      '0': '农产品',
      '1': '热销',
      '2': '最新',
      '3': '爆款'
    }
    return map[type] || type
  }
}
