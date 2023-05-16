<script lang="ts" setup>
import { defineProps,defineEmits,computed } from 'vue';

const props=defineProps(['modelValue'])
const emit=defineEmits(['update:modelValue'])
const value=computed({
  get(){
    return props.modelValue
  },
  set(value){
    emit('update:modelValue',value)
  }
})
</script>

<template>
  <div>
    <div class="w-full h-12">
      <div class="w-1/3 float-right mr-2">
        <el-input  v-model="value" @change="searchData" class="w-50 m-2" placeholder="输入文件名">
          <template #prefix>
            <Icon icon="material-symbols:search" ></Icon>
          </template>
        </el-input>
      </div>
    </div>
  </div>
</template>

<style scoped >

</style>