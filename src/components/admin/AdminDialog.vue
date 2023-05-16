<template>
    <button class="btn" @click="visible = true">
      <slot name="button">
      </slot>
    </button>
    <el-dialog width="400px" v-model="visible" :show-close="false">
      <template #header="{ close}">
        <div class="w-full h-[32px]">
          <el-button class="float-right" type="danger" @click="close">
            <Icon icon="ic:baseline-close" />
          </el-button>
        </div>
      </template>
      <div class="w-full">
        <slot name="customize">
        </slot>
      </div>
    </el-dialog>
  </template>
<script lang="ts" setup>
import { ref } from 'vue'
import { ElButton, ElDialog } from 'element-plus'
import { Icon } from '@iconify/vue';
const  visible=ref(false)
function Colse(){
  visible.value=true
}
</script>
