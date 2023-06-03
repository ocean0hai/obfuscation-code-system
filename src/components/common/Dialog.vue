<template>
    <el-button  @click="getItem">
      查看
    </el-button>
    <el-dialog v-model="visible" :show-close="false">
      <template #header="{ close}">
        <div class="flex h-6 justify-between">

          <h6>时间:{{ fileObj.time }}</h6>
          <h6>文件id:{{ fileObj.id }}</h6>
          <h6>文件类型：{{ fileObj.type }}</h6>
          <el-button type="danger" @click="close">
            <Icon icon="ic:baseline-close" />
          </el-button>
        </div>
      </template>
      <div class="flex">
        <DialogTable :colums="colums" :data={tableData} />
      </div>
    </el-dialog>
  </template>
<script lang="ts" setup>
import DialogTable from './DialogTable.vue'
import { defineProps,ref,reactive } from 'vue'
import { ElButton, ElDialog } from 'element-plus'
import { Icon } from '@iconify/vue';
import { api } from '@/api/request';
const{fileId}=defineProps<{
  fileId:number
}>()

const visible = ref(false)
const fileObj=ref({
  time:'',
  type:'',
  id:1
})
let tableData=ref<any>([
  {
    label: "文件名",
    originFile: "",
    resultFile: "",
    key:'name'
  },
  {
    label: "文件大小",
    originFile: "",
    resultFile: "",
    key:'momery'
  }
])
const colums=ref([
  {
    label:'文件属性',
    key:'label'
  },
  {
    label:'保护前文件',
    key:'originFile'
  },
  {
    label:'保护后文件',
    key:'resultFile'
  }
])
async function getItem(){
  visible.value=true
  const res:any = await api.get(`/api/file/id/${fileId}`)
  if(res.code){
    const {name,memory,createTime,originalFileId,originalFileName,type}=res.data 
    fileObj.value={
      type:type,
      time:createTime,
      id:originalFileId  
    }
    tableData.value[0].originFile=originalFileName
    tableData.value[0].resultFile=name
    tableData.value[1].originFile=memory
  }
}
</script>

<style scoped>

</style>
