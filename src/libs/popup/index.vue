<template>
  <div>
    <teleport to="body">
      <transition name="fade">
        <div
          v-show="isPopupShow"
          @click="isPopupShow = false"
          class="w-full h-full fixed top-0 left-0 bg-zinc-900/80 z-40"
        ></div>
      </transition>
      <transition name="popup">
        <div
          v-show="isPopupShow"
          v-bind="$attrs"
          class="w-screen bg-white z-50 fixed bottom-0 rounded-t"
        >
          <slot />
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script setup>
import { useScrollLock, useVModel } from '@vueuse/core'
import { watch } from 'vue'

const props = defineProps({
  // 控制显示与隐藏
  modelValue: {
    type: Boolean,
    required: true
  }
})

// 响应式数据, 当isPopupShow 值发生改变时, 会自动触发 emit 修改modelValue
const isPopupShow = useVModel(props)

defineEmits(['update:modelValue'])

// 菜单显示禁止页面滚动
const isLocked = useScrollLock(document.body)
watch(
  () => isPopupShow,
  (val) => {
    isLocked.value = val
  },
  {
    // 设定初次绑定就执行,而不是数据改变才执行
    immediate: true
  }
)
</script>

<style lang="scss" scoped>
// fade 展示动画
.fade-enter-active {
  transition: all 0.3s;
}

.fade-leave-active {
  transition: all 0.3s;
}

// 静态
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

// popup-down-up 展示动画
.popup-down-up-enter-active {
  transition: all 0.3s;
}

.popup-down-up-leave-active {
  transition: all 0.3s;
}

// 隐藏动画
.popup-down-up-enter-from,
.popup-down-up-leave-to {
  transform: translateY(100%);
}
</style>
