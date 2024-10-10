<template>
    <div>
        <mobile-navigition v-if="isMobile" />

    </div>
</template>

<script setup>
import { isMobile } from '@/utils/flexible'
import MobileNavigition from './moblie/index.vue'
</script>

<style lang="scss" scoped></style>