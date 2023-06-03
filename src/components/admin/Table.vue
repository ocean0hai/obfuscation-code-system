<script lang="ts" setup>
import { defineProps,onMounted, ref } from 'vue'
import {userType,columnsType,fileType} from '@/type/table'

const {data,columns}=defineProps<{
  data:Array<any>,
  columns:Array<columnsType>
}>()

</script>

<template>
  <div>
    <div class="overflow-x-auto w-full">
      <table class="w-full">
        <!-- head -->
        <thead>
          <tr class="flex">
            <th v-for="(item,index) in columns" class="w-36 ">{{ item.label }}</th>
            <th class="w-36" >操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in data" :key="index" class="flex">
            <td v-for="(value,key) in item" :key="key" class="w-36 block  truncate">
              {{ value }} 
            </td>
            <td class="w-20">
              <slot name="operation" :item="item">
              </slot>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped >

</style>