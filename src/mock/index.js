import Mock from 'mockjs'
import loginAPI from './login'

// 登录相关
Mock.mock(/\/login\/login/, loginAPI.login)
Mock.mock(/\/user\/get_info/, loginAPI.getUserInfo)
Mock.mock(/\/login\/logout/, loginAPI.logout)

Mock.setup({
  timeout: 400
})

export default Mock
