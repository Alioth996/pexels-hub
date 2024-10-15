import {
    ALL_CATEGORY_ITEM,
    LOCAL_CATEGORYS
} from '@/constants'
import {
    getCategoryList
} from '@/api/category'


export default {
    namespaced: true,
    state: {
        categorys: LOCAL_CATEGORYS
    },
    mutations: {
        /**
         * 修改数据的唯一方式(同步)
         * @param {*} state 
         * @param {*} newCategorys 
         */
        SET_CATEGORYS(state, newCategorys) {
            state.categorys = [ALL_CATEGORY_ITEM, ...newCategorys]
        }
    },
    /**
     * 获取分类数据并保存到vuex中
     */
    actions: {
        async useCategorys(context) {
            const {
                categorys
            } = await getCategoryList()
            context.commit('SET_CATEGORYS', categorys)
        }
    }
}