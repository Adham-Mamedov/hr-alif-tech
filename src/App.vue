<template>
  <MainLayout>
    <router-view></router-view>
  </MainLayout>

  <div id="teleport"></div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout';
export default {
  components: {MainLayout}
}
</script>

<style lang="scss">
#app {
  min-height: 100vh;
}
</style>