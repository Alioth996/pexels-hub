<template>
  <div class="relative" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <div ref="referenceTarget">
      <!--具名插槽: 触发弹出层的按钮-->
      <slot name="reference"></slot>
    </div>
    <!-- 气泡展示-->
    <transition name="slide">
      <div ref="contentTarget" :style="contentStyle" v-show="isVisiable"
        class="absolute  p-1 z-20 bg-white border rounded-md">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'popover',

}

// 延迟旗袍 关闭时长
const DELAY_TIME = 200

const PROP_TOP_LEFT = 'top-left'
const PROP_TOP_RIGHT = 'top-right'
const PROP_BOTTOM_LEFT = 'bottom-left'
const PROP_BOTTOM_RIGHT = 'bottom-right'

// 定义指定位置的 Enum
const placementEnum = [
  PROP_TOP_LEFT,
  PROP_TOP_RIGHT,
  PROP_BOTTOM_LEFT,
  PROP_BOTTOM_RIGHT
]

</script>

<script setup>
import { nextTick, ref, watch } from 'vue'

const isVisiable = ref(false)

let timeouter = null


const onMouseEnter = () => {
  isVisiable.value = true
  if (timeouter) {
    clearTimeout(timeouter)
  }
}

const onMouseLeave = () => {
  timeouter = setTimeout(() => {
    isVisiable.value = false
    timeouter = null
  }, DELAY_TIME)
}

const props = defineProps({
  placement: {
    type: String,
    default: PROP_TOP_LEFT,
    validator: (value) => {
      const result = placementEnum.includes(value)
      if (!result) {
        console.error('placement 必须是以下值之一: ' + placementEnum.join('、'))
      }
      return result
    }

  }
})

// 获取弹出层元素
const referenceTarget = ref(null)
const contentTarget = ref(null)

// 计算元素尺寸
const getElementSize = (target) => {
  if (!target) return
  return {
    width: target.offsetWidth,
    height: target.offsetHeight
  }
}

const contentStyle = ref({
  top: 0,
  left: 0
})

watch(isVisiable, (newVal) => {
  if (!newVal) return
  // 等待 DOM 更新,vue数据更新之后不会立即更新DOM
  nextTick(() => {
    // 指定弹出层的位置
    switch (props.placement) {
      // 左上
      case PROP_TOP_LEFT:
        contentStyle.value.top = 0
        contentStyle.value.left = `-${getElementSize(contentTarget.value).width}px`
        break
      // 右上
      case PROP_TOP_RIGHT:
        contentStyle.value.top = 0
        contentStyle.value.left = `${getElementSize(referenceTarget.value).width}px`
        break
      // 左下
      case PROP_BOTTOM_LEFT:
        contentStyle.value.top = `${getElementSize(referenceTarget.value).height + 10}px`
        contentStyle.value.left = `-${getElementSize(contentTarget.value).width}px`
        break
      // 右下
      case PROP_BOTTOM_RIGHT:
        contentStyle.value.top = `${getElementSize(referenceTarget.value).height}px`
        contentStyle.value.left = `${getElementSize(referenceTarget.value).width}px`
        break
    }
  })
})



</script>



<style scoped lang="scss">
.slide-enter-active,
.slide-leave-active {
  transition:
    opacity 0.3s,
    transform 0.2s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
