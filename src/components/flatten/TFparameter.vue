<script lang="ts" setup>
import { ref } from 'vue';
import Button from '../common/Button.vue';
import { submitParameter } from '@/api/upload';
import HandleInput from '../common/HandleInput.vue';
const name=ref<string>('main')
function submitHandle(){
  const subArr=[name.value,'1']
  console.log(subArr);
  submitParameter(subArr)
}

</script>

<template>
  <div class="my-5">
    <HandleInput name="指定需要偏平化函数" v-model="name"></HandleInput>
    <div class=" w-full mb-5 h-16">
      <Button @click="submitHandle" class="float-right"></Button>
    </div>
  </div>
</template>

<style scoped >

</style>