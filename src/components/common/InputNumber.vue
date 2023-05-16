<script lang="ts" setup>
import { ref,defineProps } from 'vue';
const {defaultnumber}=defineProps<{
    defaultnumber:number,
    maxnumber:number,
    minnumber:number,
    
}>()

</script>

<template>
  <div class="my-5">
    <span>--Transform=EncodeArithmeticMaxTransforms</span>
    <el-input-number  :min="1" :max="100"/>
    <span class="block text-red-400 text-sm">*递归整数表达式的深度,默认值为100</span>
 </div>
</template>

<style scoped >

</style>