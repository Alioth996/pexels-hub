import svgIcon from './svg-icon/index.vue'
import Popup from './popup/index.vue'

export default {
    install: (app) => {
        app.component(svgIcon.name || 'x-svg-icon', svgIcon)
        app.component(Popup.name || 'x-popup', Popup)
    }
}