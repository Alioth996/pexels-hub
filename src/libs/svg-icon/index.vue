<template>
    <svg aria-hidden="true">
        <use :href="symbolId" :xlink:href="symbolId" :class="fillClass" :fill="color" />
    </svg>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
    // 图标名称
    name: {
        type: String,
        required: true
    },
    // 图标前缀
    prefix: {
        type: String,
        default: 'icon'
    },
    // 图标颜色
    color: {
        type: String,
    },
    // tailwind 填充类
    fillClass: {
        type: String,
    }
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>
