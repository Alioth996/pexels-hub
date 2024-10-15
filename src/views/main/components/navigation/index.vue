<template>
    <mobile-navigition v-if="isMobile" />
    <pc-navigition v-else />

</template>

<script setup>
import { isMobile } from '@/utils/flexible'
import MobileNavigition from './moblie/index.vue'
import PcNavigition from './pc/index.vue'
import { useStore } from 'vuex'

const store = useStore()
// 触发action获取数据
store.dispatch('category/useCategorys')

</script>