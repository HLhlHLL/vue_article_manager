import axios from 'axios'
import config from './config'
import { getItem } from './localStorage.js'

const http = axios.create({ baseURL: config.baseURL })

// 请求拦截器
http.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'application/json'
    if (config.url.includes('/my')) {
      config.headers.Authorization = getItem('token')
    }

    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

// 响应拦截器
http.interceptors.response.use(
  (res) => {
    return res
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default http
