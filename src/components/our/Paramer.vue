<script lang="ts" setup>
import { ref } from 'vue';
import Button from '../common/Button.vue';
const checked1=ref<boolean>(false)
const checked2=ref<boolean>(false)
const number=ref <number>(1)
</script>

<template>
  <div>
    <h1>参数选择</h1>
    <h3>不透明谓词的选择</h3>
    <el-checkbox v-model="checked1" label="|型不透明谓词" size="large" />
    <el-checkbox v-model="checked2" label="||型不透明谓词" size="large" />
    <div>
      不透明谓词的数量：
      <el-input-number v-model="number" :min="1"></el-input-number>
    </div>
    <div>

    </div>
    <Button>确定</Button>
  </div>
</template>

<style scoped >

</style>