import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
import router from './router'

import { changeRem } from './utils/flexible'
changeRem()

import xlibs from './libs'
// 注册svg-icons 插件提供的固定地址
import 'virtual:svg-icons-register'

const app = createApp(App)
app.use(xlibs)
app.use(router)
app.mount('#app')
