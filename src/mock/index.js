import Mock from 'mockjs'
import userAPI from './user'
import homeAPI from './home'
import getProductList from './product'
import getOrderList from './order'

// 登录模块
Mock.mock(/\/login\/login/, userAPI.login)
Mock.mock(/\/user\/get_info/, userAPI.getUserInfo)
Mock.mock(/\/login\/logout/, userAPI.logout)

// 首页模块
Mock.mock(/\/home\/get_data/, homeAPI.getData)

// 商品模块
Mock.mock(/\/product\/get_product_data/, getProductList)

// 订单模块
Mock.mock(/\/order\/get_order_data/, getOrderList)

Mock.setup({
  timeout: 400
})

export default Mock
