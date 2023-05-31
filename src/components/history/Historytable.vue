<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import {historytableType} from '@/type/table'
import Button from '../common/Button.vue';
import { getTableDate } from '@/hooks/getData';
import Dialog from '../common/Dialog.vue';
import Search from '../common/Search.vue';
import { api } from '@/api/request';
import { ElMessage } from 'element-plus';
const {
  getData,
  datatotal,
  deleteData,
  searchData,
  data,
  handleCurrent
}=getTableDate('/api/file/page')

onMounted(()=>{
  getData()
})

</script>

<template>
  <div>
    <div class="w-full h-12">
      <div class="w-1/3 float-right mr-2">
        <Search @onChange="searchData" /> 
      </div>
    </div>
    <div className="overflow-x-auto">
      <table className="table w-full">
        <!-- head -->
        <thead>
          <tr>
            <th>ID</th>
            <th>保护前的文件名</th>
            <th>保护后的文件名</th>
            <th>时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
            <tr v-if="data.length !==0" v-for="(item,index) in data" :key="index">
              <td>{{ item.queryFileId }}</td>
              <td>{{ item.originalFileName }}</td>
              <td> <a
                class=" text-blue-300" 
                :href="'http://8.130.113.197:8080/api/file/download/'+item.resultFileName"> 
                {{ item.resultFileName }}
              </a></td>
              <td> {{ item.updateTime }}</td>
              <td>
                <Button @click="deleteData(item.queryFileId)">删除</Button>
                <Dialog :fileId="item.queryFileId" />
              </td>
            </tr>
            <div v-else>暂时没有数据</div> 
        </tbody>
      </table>
    </div>
    <div class="w-full mt-10">
    <div class=" w-96 mx-auto ">
      <el-pagination 
        class="w-full" 
        @current-change="handleCurrent"
        :page-size="10"
        background 
        layout="prev, pager, next" 
        :total="datatotal" />
    </div>
  </div>
  </div>

</template>

<style scoped >

</style>