import axios from 'axios'
import qs from 'qs'

const HOST = `${location.origin}`
const DEFAULT_TIMEOUT = 10 * 1000 // 10 sec
const BASEURL = 'http://localhost:3000'

/**
 * create axios instance
 * @function createAxiosInstance
 * @param {String} host
 * @param {Object} customConfig
 * 範例如下:
 * {
 *    timeout: 20000,
 *    contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
 *    withCredentials: true,
 *    withResponseHeader: true    // if true, axios will return {header: {...}, body: {...}}
 * }
 * @return {axios} axios instance
 */
const createAxiosInstance = (host = BASEURL, customConfig = {}) => {
  const axiosConfig = {
    timeout: DEFAULT_TIMEOUT,
    baseURL: host,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: false,
    withResponseHeader: false, // 是否要拿response的header，true的話會回傳 {header: res.headers, body: res.data}
    ...customConfig,
  }

  const axiosInstance = axios.create(axiosConfig)

  // request
  axiosInstance.interceptors.request.use(
    config => {
      if (
        config.headers['Content-Type'] ===
        'application/x-www-form-urlencoded;charset=UTF-8'
      ) {
        config.transformRequest = [
          data => qs.stringify(data),
          ...axios.defaults.transformRequest,
        ]
      }

      const AUTH_TOKEN = localStorage.getItem('AUTH_TOKEN')
      if (AUTH_TOKEN) {
        config.headers['Authorization'] = AUTH_TOKEN
      }

      let LANG = localStorage.getItem('LANG') || 'zh'
      config.headers['lang'] = LANG

      return config
    },
    error => Promise.reject(error)
  )

  // response
  axiosInstance.interceptors.response.use(
    res => {
      // 是否獲取header資訊
      if (axiosConfig?.withResponseHeader) {
        return {
          header: res.headers,
          body: res.data,
        }
      }

      return res.data
    },
    error => {
      const {response} = error
      if (response) {
        // 401 unauthorized, back to Login page and token expired By Terry
        if (response?.data.code == 401) {
          localStorage.removeItem('AUTH_TOKEN')
          location.href = `${HOST}/login`
        }

        // token is invalidated code 100
        if (response?.data.code === 100) {
          localStorage.removeItem('AUTH_TOKEN')
          location.href = `${HOST}/login`
        }

        if (response?.status === 500) {
          console.log('Internal Server Error')
        }

        // error handle
        const {message} = response?.data
        return Promise.reject(message)
      }
    }
  )

  return axiosInstance
}

export {createAxiosInstance}
