import axios from '../utils/axios'

export const getProductData = (params) => {
  return axios.get('/product/get_product_data', params)
}
