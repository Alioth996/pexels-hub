import {
    THEME_LIGHT
} from '@/constants'

export default {
    namespaced: true,
    state: () => ({
        theme: THEME_LIGHT
    }),
    mutations: {
        setTheme(state, theme) {
            state.theme = theme
        }
    }
}