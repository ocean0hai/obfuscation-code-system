<script lang="ts" setup>
import { PropType, defineProps, ref } from 'vue';
import {transformObj}  from '@/utils/index'
import {formType} from '@/type/index'
const {data}=defineProps<{
  data:Array<formType>
}>()
const subData=transformObj(data)
function inputValue(key:string,value:string) {
  subData[key]=value
}
</script>

<template>
  <div>
    <el-form
        ref="ruleFormRef"
        status-icon
        label-width="3.125rem"
      >
        <el-form-item v-for="({msg,type,key}) in data" :label="msg" :key="key"  >
          <!-- 普通的输入框 -->
          <input 
          v-if="type=== 'input'"
          class="input w-full input-bordered h-8" 
          :value="subData[key]" 
          @blur="inputValue(key, ($event.target as HTMLInputElement).value)"
          autocomplete="off" />

          <!-- 密码框 -->
          <input 
          v-if="type=== 'password'"
          type="password"
          class="input w-full input-bordered h-8" 
          :value="subData[key]" 
          @blur="inputValue(key, ($event.target as HTMLInputElement).value)"
          autocomplete="off" 
          />
        </el-form-item>
      <el-form-item class="">
        <slot name="submit" :data="subData"></slot>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped >

</style>