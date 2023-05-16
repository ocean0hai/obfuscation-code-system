<script lang="ts" setup>
import {ref,reactive} from 'vue'
import { submitParameter } from '@/api/upload';
import Button from '../common/Button.vue';
import HandleInput from '../common/HandleInput.vue';

const name=ref('main')
const intValue=ref(false)
const Level=ref(100)
const Transforms=ref(100)
function submitHandle(){
  const data=[
    name.value,
    '2',
    intValue.value===true ? '1':'' ,
    Level.value+'',
    Transforms.value+''
  ]
  console.log(data);
  submitParameter(data)
  
}
</script>

<template>
  <div>
    <HandleInput v-model="name" />
    <div class="my-4">
      --Transform=EncodeArithmeticKinds
      <el-checkbox  v-model="intValue" />integer(整数)
      <span class="block text-red-400 text-sm">
        *选择需要编码的文本类型,目前只有integer可用(替换成整数算数)
      </span>
    </div>
    <div class="my-4">
      <span>--Transform=EncodeArithmeticMaxLevel</span>
      <el-input-number v-model="Level" :min="1" :max="100"/>
      <span class="block text-red-400 text-sm">*递归整数表达式的深度,默认值为100</span>
    </div>
    <div class="my-5">
      <span>--Transform=EncodeArithmeticMaxTransforms</span>
      <el-input-number v-model="Transforms" :min="1" :max="100"/>
      <span class="block text-red-400 text-sm">*递归整数表达式的深度,默认值为100</span>
    </div>
    <div class=" w-full">
      <Button @click="submitHandle" class="float-right"></Button>
    </div>
  </div>
</template>

<style scoped >

</style>