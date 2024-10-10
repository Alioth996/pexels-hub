import { createRouter, createWebHistory } from 'vue-router'

import { isMobile } from '@/utils/flexible'
import mobileRoutes from './modules/moblie-routes'
import pcRoutes from './modules/pc-routes'


const router = createRouter({
    history: createWebHistory(),
    routes: isMobile.value ? mobileRoutes : pcRoutes
})

export default router

