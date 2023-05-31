<script lang="ts" setup>
import { formType } from '@/type';
import {transformObj} from '@/utils'
import { defineProps,defineExpose } from 'vue';
const {data,str}=defineProps<{
  data:Array<formType>,
  str:string,
}>()
const paramer=transformObj(data)

const handleCheckAllChange = (key:string)=> {
  paramer[key] = !paramer[key]   
  console.log(paramer);
}
defineExpose({
  paramer
})
</script>

<template>
  <div class="mt-10">
    <div v-for="({msg,type,key}) in data" >
      <div :key="key" class="tooltip tooltip-right z-50" :data-tip="msg">
       <el-checkbox @change="handleCheckAllChange (key)"  />{{str+key}}
      </div>
    </div>
  </div>
</template>

<style scoped >

</style>