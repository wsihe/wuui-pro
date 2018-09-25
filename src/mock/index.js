import Mock from 'mockjs'
import userAPI from './user'
import homeAPI from './home'

// 登录相关
Mock.mock(/\/login\/login/, userAPI.login)
Mock.mock(/\/user\/get_info/, userAPI.getUserInfo)
Mock.mock(/\/login\/logout/, userAPI.logout)

Mock.mock(/\/home\/get_data/, homeAPI.getData)

Mock.setup({
  timeout: 400
})

export default Mock
