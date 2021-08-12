<template>
  <div class="d-flex justify-content-center align-items-center vh-100" v-if="loading">
    <loader/>
  </div>
  <MainLayout v-else>
    <router-view></router-view>
  </MainLayout>

  <div id="teleport"></div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout';
import Loader from '@/components/Loader';
export default {
  components: {Loader, MainLayout},
  data() {
    return {
      loading: false,
      chartData: [],
      departments: ['Accounting', 'IT', 'Marketing']
    }
  },
  async mounted() {
    this.loading = true
    await this.$store.dispatch('loadEmployees')
    this.loading = false
  },
}
</script>

<style lang="scss">
#app {
  min-height: 100vh;
}
</style>