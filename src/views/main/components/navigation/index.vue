<template>
    <mobile-navigition v-if="isMobile" :categoryList="categoryList" />
</template>

<script setup>
import { isMobile } from '@/utils/flexible'
import MobileNavigition from './moblie/index.vue'
import { getCategoryList } from '@/api/category'
import { ref } from 'vue'
import { ALL_CATEGORY_ITEM } from '@/constants'
const categoryList = ref([])

const getCategoryListData = async () => {
    const { categorys } = await getCategoryList()
    categoryList.value = categorys
    categoryList.value.unshift(ALL_CATEGORY_ITEM)
}
getCategoryListData()
</script>

<style lang="scss" scoped></style>