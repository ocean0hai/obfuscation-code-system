<script lang="ts" setup>
import { ref } from 'vue';
import Button from '../common/Button.vue';
import { submitParameter } from '@/api/upload';
import { ElMessage } from 'element-plus';
const checked1=ref<boolean>(false)
const checked2=ref<boolean>(false)
const number=ref <number>(1)

function submitHandle(){
  
  let num=0
  num=checked1.value&&checked2.value ? 3 : checked1.value ? 1: checked2.value ? 2:0
  if (num===0) {
    ElMessage.warning('选择必要参数！！') 
    return ;
  }
  const subArr:Array<string>=[
    num+'',
    number.value+''
  ]
  console.log(subArr);
  submitParameter(subArr,"1")
}
</script>

<template>
  <div>
    <h1>参数选择</h1>
    <h3>不透明谓词的选择(<span class="text-red-400">必填</span>)</h3>
    <el-checkbox v-model="checked1" label="|型不透明谓词" size="large" />
    <el-checkbox v-model="checked2" label="||型不透明谓词" size="large" />
    <div>
      不透明谓词的数量：
      <el-input-number v-model="number" :min="1"></el-input-number>
    </div>
    <div>

    </div>
    <div class=" w-full mb-5 h-16">
      <Button @click="submitHandle" class="float-right"></Button>
    </div>
  </div>
</template>

<style scoped >

</style>