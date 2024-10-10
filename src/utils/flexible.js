import { computed } from 'vue'
import { useWindowSize } from '@vueuse/core';
import { PC_DEVICE_WIDTH } from '@/constants'

// 这个函数的工作原理如下：
// 1. 我们定义了一个名为 `isMobile()` 的函数。并使用computed函数返回一个响应式变量
// 2. 函数使用正则表达式来测试 `navigator.userAgent` 字符串。
// 3. 正则表达式检查常见的移动设备关键词，如 Android、iPhone、iPad 等。
// 4. 如果找到这些关键词中的任何一个，函数返回 `true`，表示用户正在使用移动设备；否则返回 `false`，表示用户可能在使用PC。

// 需要注意的是，这种方法并不是100%准确的，因为：
// 1. 用户可能修改他们的用户代理字符串。
// 2. 某些设备（如平板电脑）可能难以准确分类。
// 3. 新的设备和浏览器可能不在这个列表中。
// 对于更复杂和准确的检测，你可以考虑使用专门的库，如 `ua-parser-js` 或 `mobile-detect`。这些库提供了更全面和更新的设备检测功能。
// 另外，在现代web开发中，我们通常更推荐使用响应式设计，根据屏幕尺寸而不是设备类型来调整布局。这可以通过CSS媒体查询来实现，使得网站能够适应各种设备和屏幕尺寸。
/**
 * @description 根据像素和userAgent判断当前是否为移动设备
 * @returns {boolean} 移动设备返回true，否则返回false
 */ 

const {width} = useWindowSize()
export const isMobile=computed(()=>{
    return width.value < PC_DEVICE_WIDTH  && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
})


