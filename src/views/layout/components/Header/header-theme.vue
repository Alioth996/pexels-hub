<script setup>
import { THEME_LIGHT, THEME_DARK, THEME_SYSTEM } from '@/constants'
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

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


const onThemeChange = (item) => {
    store.commit('theme/setTheme', item.value)
}

const svgIconName = computed(() => {
    const findName = themeArr.find(item => item.value === store.getters.theme)
    return findName.icon
})


</script>

<script>
export default {
    name: 'header-theme'
}
</script>

<template>
    <pxh-popover placement="bottom-left">
        <!-- 弹出层触发器 -->
        <template #reference>
            <pxh-svg-icon :name="svgIconName" class="w-4 h-4 p-1 cursor-pointer rounded-sm 
            hover:bg-zinc-100/60
            duration-200 outline-none dark:hover:bg-zinc-900"
                fillClass="fill-zinc-900 dark:fill-zinc-300"></pxh-svg-icon>
        </template>

        <!-- 弹出层 -->
        <div class="w-[140px] overflow-hidden">
            <div class="flex items-center p-1 cursor-pointer rounded hover:bg-zinc-100/60 dark:hover:bg-zinc-900"
                v-for="item in themeArr" :key="item.id" @click="onThemeChange(item)">
                <pxh-svg-icon :name="item.icon" class="w-1.5 h-1.5 mr-1"
                    fillClass="fill-zinc-900 dark:fill-zinc-300"></pxh-svg-icon>
                <span class="text-zinc-900 text-sm dark:text-zinc-300                     ">{{ item.name }}</span>
            </div>
        </div>
    </pxh-popover>

</template>
