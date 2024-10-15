<template>
  <!-- pc端一级路由出口 -->
  <div class="h-screen">
    <PxhHeader class="h-header" />
    <PxhMain class="h-main" />
    <Floating />
  </div>
</template>


<script>
export default {
  name: 'Layout',
}
</script>

<script setup>



import PxhHeader from "./components/Header/index.vue";
import PxhMain from "./components/PxhMain.vue";
import Floating from "./components/Floating.vue";



</script>

<style lang="scss" scoped></style>