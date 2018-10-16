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
  },
  orderStatus (type) {
    let map = {
      '0': '待付款',
      '1': '待发货',
      '2': '已发货',
      '3': '已完成',
      '4': '已关闭'
    }
    return map[type] || type
  }
}
