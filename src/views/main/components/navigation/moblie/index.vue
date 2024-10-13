<template>
    <div class="bg-white sticky top-0 z-10 left-0">
        <ul class="flex  overflow-x-auto overflow-y-hidden relative p-1 text-xs text-zinc-600" ref="ulTarget">


            <!-- 汉堡按钮 -->
            <li class="flex items-center fixed right-[-1px] top-0 h-4 px-1 z-20 bg-white shadow-l-white"
                @click="isShowPopup = true">
                <x-svg-icon name="hamburger" class="w-1.5 h-1.5 " />
            </li>

            <!-- 滑块 -->
            <li class="absolute rounded-lg duration-200 h-[22px] bg-zinc-900" :style="sliderStyle">
            </li>

            <!-- 分类选项 -->
            <li v-for="(cate, index) in categoryList" :key="cate.id"
                class="shrink-0 px-1.5 py-0.5 z-10 duration-200 font-medium last:mr-4" :ref="setItemRef"
                :class="currentCateTarget === index ? 'text-zinc-100' : ''" @click="onItemClick(index)">
                {{ cate.name }}
            </li>
        </ul>
        <x-popup v-model="isShowPopup">
          <cate-menu :categorys="categoryList" @onItemClick="onItemClick"/>
<!--          todo bug: 点击超过屏幕的菜单项后顶部导航栏没有移动到对应的位置-->
        </x-popup>
    </div>
</template>

<script setup>
import { ref, onBeforeUpdate, watch } from 'vue'
import { useScroll } from '@vueuse/core'
import cateMenu from '@/views/main/components/cateMenu/index.vue'

defineProps({
    categoryList: {
        type: Array,
        required: true
    },
})

// 选择的分类元素
const currentCateTarget = ref(0)

// ul元素
const ulTarget = ref(null)
const { x: ulX } = useScroll(ulTarget)


const onItemClick = (index)=>{
  currentCateTarget.value = index
  isShowPopup.value = false
}


// 滑块初始样式
const sliderStyle = ref({
    width: '52px',
    transform: 'translateX(0px)'
})


// 分类元素数组
let itemRefs = []
let setItemRef = el => {
    itemRefs.push(el)
}

// 数据改变清除数组
onBeforeUpdate(() => {
    itemRefs = []
})

// 监听当前点击的元素设置滑块的位置
watch(currentCateTarget, (val) => {
    const { width, left } = itemRefs[val].getBoundingClientRect()
    sliderStyle.value = {
        width: `${width}px`,
        // 滑块的位置 = ul横向滚动的距离 + 当前元素的left - ul的padding
        transform: `translateX(${left + ulX.value - 10}px)`
    }
})

// 显隐分类菜单选项
const isShowPopup = ref(false)


</script>
