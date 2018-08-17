import { getParams } from '@/utils'
const USER_MAP = {
  super_admin: {
    name: 'super_admin',
    user_id: '1',
    access: ['super_admin', 'admin'],
    token: 'super_admin'
  },
  admin: {
    name: 'admin',
    user_id: '2',
    access: ['admin'],
    token: 'admin'
  }
}

export const login = req => {
  req = JSON.parse(req.body)
  return {
    code: 200,
    data: {token: USER_MAP[req.userName].token},
    msg: ''
  }
}

export const getUserInfo = req => {
  const params = getParams(req.url)
  return {
    code: 200,
    data: USER_MAP[params.token],
    msg: ''
  }
}

export const logout = req => {
  return {
    code: 200,
    data: null,
    msg: ''
  }
}
