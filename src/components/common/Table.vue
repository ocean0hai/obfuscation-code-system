<template>
  <div class=" mx-0" >
    <el-table :data="data" table-layout="fixed" align="center" border >
      <el-table-column fixed prop="name" />
      <el-table-column prop="content"   />
    </el-table>
  </div>

</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { dataType } from '@/type/table';
const {data}=defineProps({
  data:Array<dataType>
})


</script>
  