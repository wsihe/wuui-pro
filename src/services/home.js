import axios from '../utils/axios'

export const getHomeData = () => {
  return axios.get('/home/get_data')
}
