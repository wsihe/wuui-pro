import Axios from 'axios'
// import Cookies from 'js-cookie'
// import { TOKEN_KEY } from '@/libs/util'
class HttpRequest {
  constructor () {
    this.options = {
      method: '',
      url: ''
    }
    // 存储请求队列
    this.queue = {}
  }
  // 销毁请求实例
  destroy (url) {
    delete this.queue[url]
    const queue = Object.keys(this.queue)
    return queue.length
  }
  // 请求拦截
  interceptors (instance, url) {
    // 添加请求拦截器
    instance.interceptors.request.use(config => {
      // Do something before request is sent
      if (config.method === 'post' || config.method === 'put') {
        config.data = JSON.stringify(config.data)
      }
      if (!config.url.includes('/users')) {
        // config.headers['x-access-token'] = Cookies.get(TOKEN_KEY)
      }
      return config
    }, error => {
      return Promise.reject(error)
    })

    // 添加响应拦截器
    instance.interceptors.response.use((res) => {
      let { data } = res
      const is = this.destroy(url)
      if (!is) {
        setTimeout(() => {
          // Spin.hide()
        }, 500)
      }
      if (data.code !== 200) {
        // 后端服务在个别情况下回报201，待确认
        if (data.code === 401) {
          // Cookies.remove(TOKEN_KEY)
          console.error('未登录，或登录失效，请登录')
        } else {
          if (data.msg) console.error(data.msg)
        }
        return false
      }
      return data
    }, (error) => {
      return Promise.reject(error)
    })
  }
  // 创建实例
  create () {
    const conf = {
      timeout: 60000
    }
    let instance = Axios.create(conf)
    instance.defaults.headers.post['Content-Type'] = 'application/json'
    instance.defaults.headers.put['Content-Type'] = 'application/json'
    return instance
  }

  request (options) {
    let instance = this.create()
    this.interceptors(instance, options.url)
    options = Object.assign({}, options)
    this.queue[options.url] = instance
    return instance(options)
  }

  get (url, params, headers) {
    let options = {
      url,
      params,
      headers
    }
    return this.request(options)
  }

  post (url, params, headers) {
    let options = {
      method: 'post',
      url,
      data: params,
      headers
    }
    return this.request(options)
  }

  put (url, params, headers) {
    let options = {
      method: 'put',
      url,
      data: params,
      headers
    }
    return this.request(options)
  }

  delete (url, params, headers) {
    let options = {
      method: 'delete',
      url,
      params,
      headers
    }
    return this.request(options)
  }
}

const axios = new HttpRequest()
export default axios
