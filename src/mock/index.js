import Mock from 'mockjs'
import userAPI from './user'

// 登录相关
Mock.mock(/\/login\/login/, userAPI.login)
Mock.mock(/\/user\/get_info/, userAPI.getUserInfo)
Mock.mock(/\/login\/logout/, userAPI.logout)

Mock.setup({
  timeout: 400
})

export default Mock
