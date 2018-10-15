import axios from '../utils/axios'

export const queryProducts = (params) => {
  return axios.get('/product/get_product_data', params)
}
