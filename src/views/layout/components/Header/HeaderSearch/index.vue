<script setup>
import { ref } from 'vue'

const inputValue = ref('')

</script>

<script>
export default {
  name: 'HeaderSearch',
}

</script>

<template>
<div class="w-full">
  <pxh-search v-model="inputValue">
      <template #dropdown>
        <div>2123</div>
      </template>
  </pxh-search>
</div>
</template>

<style scoped lang="scss">

</style>