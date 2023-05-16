<template>
  <div class="w-full" >
    <el-table :data="data.tableData" table-layout="fixed" align="center" border >
      <el-table-column :prop="item.key" v-for="(item,index) in colums" :label="item.label"   />
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
const {data,colums}=defineProps<{
  data:any,
  colums?:any
}>()
</script>
  