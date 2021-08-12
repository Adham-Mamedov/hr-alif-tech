<template>
  <canvas ref="chart"></canvas>
</template>

<script>
import {Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default {
  name: "Bar",
  props: ['config'],
  mounted() {
    const ctx = this.$refs.chart.getContext('2d')
    if (ctx) new Chart(ctx, this.config)
  },
}
</script>

<style scoped>

</style>