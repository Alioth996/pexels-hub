<script setup>
import { THEME_LIGHT, THEME_DARK, THEME_SYSTEM } from '@/constants'
const themeArr = [
    {
        id: 0,
        name: '极简白',
        value: THEME_LIGHT,
        icon: 'theme-light'
    },
    {
        id: 1,
        name: '极夜黑',
        value: THEME_DARK,
        icon: 'theme-dark'

    },
    {
        id: 2,
        name: '跟随系统',
        value: THEME_SYSTEM,
        icon: 'theme-system'

    },
]

</script>

<script>
export default {
    name: 'header-theme'
}
</script>

<template>
    <pxh-popover placement="bottom-left">
        <template #reference>
            <pxh-svg-icon name="theme-light" class="w-4 h-4 p-1 cursor-pointer rounded-sm 
            hover:bg-zinc-100/60
            duration-200 outline-none" fillClass="fill-zinc-900"></pxh-svg-icon>
        </template>

        <!-- 弹出层 -->
        <div class="w-[140px] overflow-hidden">
            <div class="flex items-center p-1 cursor-pointer rounded hover:bg-zinc-100/60" v-for="item in themeArr"
                :key="item.id">
                <pxh-svg-icon :name="item.icon" class="w-1.5 h-1.5 mr-1" fillClass="fill-zinc-900"></pxh-svg-icon>
                <span class="text-zinc-900 text-sm">{{ item.name }}</span>
            </div>
        </div>
    </pxh-popover>

</template>

<style scoped lang="scss"></style>