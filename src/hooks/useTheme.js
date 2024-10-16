import {
    watch
} from 'vue'
import store from '../store'
import {
    THEME_DARK,
    THEME_LIGHT,
    THEME_SYSTEM
} from '@/constants'

/**
 *  监听系统主题变更
 */
let matchMedia
const watchSystemTheme = () => {
    if (matchMedia) return
    matchMedia = window.matchMedia('(prefers-color-scheme: dark)')

    matchMedia.addEventListener('change', (e) => {
        changTheme(THEME_SYSTEM)
    })
}

const changTheme = (theme) => {
    let themeClass = ''
    switch (theme) {
        case THEME_DARK:
            themeClass = 'dark'
            break;
        case THEME_LIGHT:
            themeClass = 'light'
            break;
        case THEME_SYSTEM:
            watchSystemTheme()
            themeClass = matchMedia.matches ? 'dark' : 'light'
            break;
        default:
            break;
    }
    document.documentElement.className = themeClass
}


export const useTheme = () => {
    watch(
        () => store.getters.theme,
        (val) => changTheme(val), {
            // 立即执行
            immediate: true
        }
    )

}