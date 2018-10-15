import Mock from 'mockjs'
import userAPI from './user'
import homeAPI from './home'
import getProductList from './product'

// 登录相关
Mock.mock(/\/login\/login/, userAPI.login)
Mock.mock(/\/user\/get_info/, userAPI.getUserInfo)
Mock.mock(/\/login\/logout/, userAPI.logout)

Mock.mock(/\/home\/get_data/, homeAPI.getData)

Mock.mock(/\/product\/get_product_data/, getProductList)

Mock.setup({
  timeout: 400
})

export default Mock
