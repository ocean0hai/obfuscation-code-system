<script lang="ts" setup>
import { defineProps,defineEmits,computed, ref } from 'vue';
import { Icon } from '@iconify/vue';
const {text}=defineProps({
  text:String
})
const emit=defineEmits(['onChange'])
const inputValue=ref('') 
function Change(){
  emit('onChange',inputValue.value)
}

</script>

<template>
  <el-input
    v-model="inputValue"
    @change="Change"  
    class="w-50 m-2" :placeholder="text">
    <template #prefix>
      <Icon icon="material-symbols:search" ></Icon>
    </template>
  </el-input>
</template>

<style scoped >

</style>