import axios from '../utils/axios'

export const login = (username, password) => {
  const params = {
    username,
    password
  }
  return axios.post('/login/login', params)
}

export const logout = () => {
  return axios.post('/login/logout')
}
