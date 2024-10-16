<script setup>
import { useIdenticon } from '@/hooks'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const { userVisInfo } = useIdenticon()


const avatar = ref('')

onMounted(() => {
    axios.get('http://api.alioth7.com/avatar').then(res => {
        avatar.value = res.data.avatar
    })
})

// // 获取用户头像
// const getUserAvatar = async () => {
//     const res = await getUserAvatar()
//     console.log(res)
// }

// 构建 menu 数据源
const menuArr = [
    {
        id: 0,
        title: '个人资料',
        icon: 'profile',
        path: '/profile'
    },
    {
        id: 1,
        title: '升级 VIP',
        icon: 'vip-profile',
        path: '/member'
    },
    {
        id: 2,
        title: '退出登录',
        icon: 'logout',
        path: ''
    }
]


</script>

<template>
    <pxh-popover placement="bottom-left" class="flex items-center">
        <template #reference>
            <div
                class="relative flex items-center py-0.5 px-1 rounded-sm cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-900 duration-200">
                <img :src="`${avatar}`" alt="" width="32" height="32">
                <div>
                    <!-- 下箭头 -->
                    <pxh-svg-icon class="h-1.5 w-1.5 ml-0.5" name="down-arrow"
                        fillClass="fill-zinc-900 dark:fill-zinc-300"></pxh-svg-icon>
                    <!-- vip 标记 -->
                    <pxh-svg-icon name="vip" class="w-1.5 h-1.5 absolute right-[16px] bottom-0"></pxh-svg-icon>
                </div>
            </div>
        </template>

        <!-- 弹出层 -->
        <div class="w-[140px] overflow-hidden">
            <div class="flex items-center p-1 cursor-pointer rounded hover:bg-zinc-100/60 dark:hover:bg-zinc-800"
                v-for="item in menuArr" :key="item.id">
                <pxh-svg-icon :name="item.icon" class="w-1.5 h-1.5 mr-1"
                    fillClass="fill-zinc-900 dark:fill-zinc-300"></pxh-svg-icon>
                <span class="text-zinc-800 dark:text-zinc-300 text-sm">{{
                    item.title
                }}</span>
            </div>
        </div>
    </pxh-popover>
</template>

<style scoped lang="scss"></style>