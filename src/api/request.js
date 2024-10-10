import axios from 'axios'

const instance = axios.create({
    // dev
    baseURL: '/api',
    timeout: 5000
    // prod
    // baseURL: 'https://api.imooc-front.lgdsunday.club/prod-api',
})

export default instance