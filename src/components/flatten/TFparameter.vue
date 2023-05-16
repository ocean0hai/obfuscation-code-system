<script lang="ts" setup>
import { reactive,ref } from 'vue';
import CheckBox from '../common/CheckBox.vue';
import Button from '../common/Button.vue';
import { submitParameter } from '@/api/upload';
import { formType,paramerType } from '@/type';
import HandleInput from '../common/HandleInput.vue';
const childBox=ref<any>(null)
const name=ref<string>('main')
const paramerData=ref<Array<formType>>([
  {
    msg:'打印线性化块',
    type:'checkbox',
    key:'DumpBlocks'
  },
  {
    msg:'选中将基本块拆分为单独块',
    type:'checkbox',
    key:'SplitBasicBlocks'
  },
  {
    msg:'选中将基本块序列是随机的',
    type:'checkbox',
    key:'RandomizeBlocks'
  },
  {
    msg:'选中将在每个块执行前打印信息',
    type:'checkbox',
    key:'Trace'
  }
])
const str=ref('—Transform=—Flatten')
function submitHandle(){
  const subArr=[name.value,'1']
  const paramer=childBox.value.paramer
  Object.keys(paramer).map(item=>{
    subArr.push(paramer[item]===true ? '1':'')
  })
  submitParameter(subArr)
}

</script>

<template>
  <div class="my-5">
    <HandleInput v-model="name"></HandleInput>
    <h1>参数选择</h1>

    <CheckBox :str="str" ref="childBox" :data="paramerData"></CheckBox>
    <div class=" w-full">
      <Button @click="submitHandle" class="float-right"></Button>
    </div>
  </div>
</template>

<style scoped >

</style>