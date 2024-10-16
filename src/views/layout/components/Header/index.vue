<script setup>
import { useRouter } from 'vue-router'

import HeaderSearch from "./HeaderSearch/index.vue";
import HeaderTheme from '@/views/layout/components/Header/header-theme.vue'
import HeaderUser from '@/views/layout/components/Header/header-user.vue'

const router = useRouter()

const goHome = () => {
  router.push('/')
}
</script>
<script>

export default {
  name: 'Header',
}

</script>


<template>     
  <div class="w-full bg-white border-b border-b-zinc-200 dark:bg-zinc-800 dark:border-b-zinc-700 px-2 py-1">
    <div class="flex items-center">
      <img src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png" alt="PexelsHub-logo"
        class="h-4 cursor-pointer mr-2" @click="goHome" />
      <header-search class="mr-1"></header-search>
      <header-theme class="mr-1" />
      <header-user />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>