import axios from 'axios'


const instance = axios.create({
  // 自动获取开发与生产环境接口地址
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000
})

instance.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

instance.interceptors.response.use(response => {
  const { data, code, success } = response.data

  if (success && code <400) {
    console.log(
      `
      =====${response.config.url.replace('/','')}请求====>
      `,data
    )

    return data
  }

}, error => {
  return Promise.reject(error)
})
export default instance