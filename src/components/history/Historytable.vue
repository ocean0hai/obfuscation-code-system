<script lang="ts" setup>
import { defineProps,onMounted, ref } from 'vue'
import {historytableType} from '@/type/table'
import Button from '../common/Button.vue';
import Dialog from '../common/Dialog.vue';
import { api } from '@/api/request';
import { Icon } from '@iconify/vue';
import { ElMessage } from 'element-plus';
let data=ref<Array<historytableType>>([])
const fileTotal=ref<number>(1)
onMounted(()=>{
  getTable(1)
})
async function getTable(num:number){
  const res:any = await api.get('/api/file/page',{
    params:{
      page:num,
      limit:10
    }
  })
  
  if (res.code===200) {
    const {total,records}=res.data
    fileTotal.value=total
    data.value=records
  }
}
async function deleteFile(id:number){
  const res:any= await api.delete(`/api/file/remove/fileId/${id}`)
  if ( res.code===200) {
     ElMessage.success('删除成功！') 
  }else{
    ElMessage.error('删除失败！')
  }
}
const searchValue=ref('')

async function searchData(){
  const res:any= await api.get(`/api/file/id/${searchValue.value}`)
}
async function downloadFile(name:string) {
  //下载地址：/api/file/download/
}
async function handleCurrent(val:any) {
  getTable(val) 
}
</script>

<template>
  <div>
    <div class="w-full h-12">
      <div class="w-1/3 float-right mr-2">
        <el-input  v-model="searchValue" @change="searchData" class="w-50 m-2" placeholder="输入文件名">
          <template #prefix>
            <Icon icon="material-symbols:search" ></Icon>
          </template>
        </el-input>
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
            <tr v-for="(item,index) in data" :key="index">
              <td>{{ item.queryFileId }}</td>
              <td>{{ item.originalFileName }}</td>
              <td> <a
                @click="downloadFile(item.resultFileName)" 
                class=" text-blue-300" 
                :href="'http://8.130.113.197:8080/api/file/download/'+item.resultFileName"> 
                {{ item.resultFileName }}
              </a></td>
              <td> {{ item.updateTime }}</td>
              <td>
                <Button @click="deleteFile(item.queryFileId)">删除</Button>
                <Dialog :fileId="item.queryFileId" />
              </td>
            </tr> 
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
        :total="fileTotal" />
    </div>
  </div>
  </div>

</template>

<style scoped >

</style>