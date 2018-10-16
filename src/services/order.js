import axios from '../utils/axios'

export const queryOrders = (params) => {
  return axios.get('/order/get_order_data', params)
}
