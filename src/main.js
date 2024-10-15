import {
    createApp
} from 'vue'
import App from './App.vue'
import './styles/index.scss'
import router from './router'
import store from './store'

import {
    changeRem
} from './utils/flexible'
changeRem()

// 通用组件注册
import pxhlibs from './libs'
// 注册svg-icons 插件提供的固定地址
import 'virtual:svg-icons-register'

const app = createApp(App)
app.use(pxhlibs)
    .use(router)
    .use(store)
    .mount('#app')