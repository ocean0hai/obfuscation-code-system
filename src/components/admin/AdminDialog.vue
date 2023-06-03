<template>
    <button class="btn" @click="visible = true">
      <slot name="button">
      </slot>
    </button>
    <el-dialog width="400px" v-model="visible" :show-close="false">
      <template #header="{ close}">
        <div class="w-full h-[32px]">
          <el-button class="float-right" type="danger" @click="visible=false">
            <Icon icon="ic:baseline-close" />
          </el-button>
        </div>
      </template>
      <div class="w-full">
        <slot name="customize">
        </slot>
        <div class="w-16 mx-auto">
            <button 
            class="btn" 
            @click="()=>{
              visible=false
              putUser(id)
            }">确定</button> 
          </div>
      </div>
    </el-dialog>
  </template>
<script lang="ts" setup>
import { nextTick, ref } from 'vue'
import { ElButton, ElDialog } from 'element-plus'
import { Icon } from '@iconify/vue';
const  visible=ref(false)
const {id,putUser}=defineProps<{
  id?:number,
  putUser:Function
}>()
</script>
