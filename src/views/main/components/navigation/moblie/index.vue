<template>
    <div>
        <h1>mobile Home</h1>
    </div>
</template>

<script setup>
import { getCategoryList } from '@/api/category'
import { onMounted } from 'vue'
onMounted(async () => {
    const res = await getCategoryList()
    console.log(res)
})
</script>

<style lang="scss" scoped></style>