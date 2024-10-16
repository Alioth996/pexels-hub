import {
    createStore
} from 'vuex'

import
createPersistedState
from 'vuex-persistedstate'

import getters from './getter'
import category from './modules/category'
import theme from './modules/theme'
const store = createStore({
    getters,
    modules: {
        category,
        theme
    },
    // 持久化vuex数据 同步保存到localStorage
    plugins: [createPersistedState({
        key: 'Pexels-hub',
        paths: ['category', 'theme']
    })]
})



export default store