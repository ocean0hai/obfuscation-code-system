<script setup lang="ts">
import * as echarts from 'echarts'
import { provide } from 'vue';
provide('echarts',echarts)
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
