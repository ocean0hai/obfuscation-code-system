<script lang="ts" setup>
import {ref} from 'vue'
import { submitParameter } from '@/api/upload';
import Button from '../common/Button.vue';
import HandleInput from '../common/HandleInput.vue';
const name=ref('main')
function submitHandle(){
  const data=[
    name.value,
    '2' 
  ]
  submitParameter(data)
}
</script>

<template>
  <div>
    <HandleInput name="指定需要指令替换函数" v-model="name" />
    <div class=" w-full h-16">
      <Button @click="submitHandle" class="float-right"></Button>
    </div>
  </div>
</template>

<style scoped >

</style>