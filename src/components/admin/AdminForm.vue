<script lang="ts" setup>
import { PropType, defineProps, ref } from 'vue';
import { objType } from '@/type';
const {item,babel}=defineProps<{
  item:objType,
  babel?:Array<objType>
}>()

function inputValue(key:string,value:string) {
  item[key]=value
}
function inputP(str:string){
  const arr=['id','state','createTime','updateTime','status']
  return arr.includes(str)
}
</script>

<template>
  <div>
    <el-form
    label-width="90px"
    >
      <el-form-item v-for="(value,key) in item" :label="key" >
        <div v-if="inputP(key+'')">
          <span>{{ value }}</span>
        </div>
        <div v-else class="flex">
        <!-- 普通的输入框 -->
          <span></span>
          <input
            class="input w-full input-bordered h-8" 
            :value="item[key]" 
            @blur="inputValue(key+'', ($event.target as HTMLInputElement).value)"
            autocomplete="off" />  
        </div>
      </el-form-item> 
      <el-form-item class=" mx-auto">
        <slot name="submit" :data="item"></slot>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped >

</style>