import { getParams } from '@/utils'
const USER_MAP = {
  super_admin: {
    name: 'super_admin',
    user_id: '1',
    access: ['super_admin', 'admin'],
    token: 'super_admin'
  },
  admin: {
    name: 'river',
    user_id: '2',
    access: ['admin'],
    token: 'admin'
  }
}

export default {
  login (request) {
    request = JSON.parse(request.body)
    if (!USER_MAP[request.username]) {
      return
    }
    return {
      code: 200,
      data: {
        token: USER_MAP[request.username].token,
        userName: USER_MAP[request.username].name
      },
      msg: ''
    }
  },
  getUserInfo (request) {
    const params = getParams(request.url)
    return {
      code: 200,
      data: USER_MAP[params.token],
      msg: ''
    }
  },
  logout () {
    return {
      code: 200,
      data: null,
      msg: ''
    }
  }
}
