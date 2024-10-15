import {
    createStore
} from 'vuex'

import
createPersistedState
from 'vuex-persistedstate'

import getters from './getter'
import category from './modules/cat egory'

const store = createStore({
    getters,
    modules: {
        category 
    },
    // 持久化vuex数据 同步保存到localStorage
    plugins: [createPersistedState({
        key:'Pexels-hub',
        paths: ['category']
    })]
})



export default store