import { getParams } from '@/utils'
const USER_MAP = {
  admin: {
    name: 'river',
    user_id: '1',
    access: ['admin'],
    token: 'admin'
  }
}

export default {
  login (request) {
    const {password, username} = JSON.parse(request.body)
    if (password === '888888' && username === 'admin') {
      return {
        status: 'ok',
        data: {
          token: USER_MAP[username].token,
          userName: USER_MAP[username].name
        }
      }
    }
    return {
      status: 'error',
      msg: ''
    }
  },
  getUserInfo (request) {
    const params = getParams(request.url)
    return {
      status: 'ok',
      data: USER_MAP[params.token],
      msg: ''
    }
  },
  logout () {
    return {
      status: 'ok',
      data: null,
      msg: ''
    }
  }
}
