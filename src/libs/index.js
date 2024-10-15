// import svgIcon from './svg-icon/index.vue'
// import Popup from './popup/index.vue'

import { defineAsyncComponent} from 'vue'
export default {
    install: (app) => {
        // app.component(svgIcon.name || 'x-svg-icon', svgIcon)
        // app.component(Popup.name || 'x-popup', Popup)

        // 1.获取当前路径下的所有 index.vue
        const components = import.meta.glob('./*/index.vue')
        // 2. 遍历获取组件模块
        for (const [fullPath,fn] of Object.entries(components)) {
            const componentName = 'pxh-' + fullPath.replace('./', '').split('/')[0]
            // 组件注册
           app.component(componentName,defineAsyncComponent(fn))
        }
    }
}