<template>
    <el-button  @click="getItem">
      查看
    </el-button>
    <el-dialog v-model="visible" :show-close="false">
      <template #header="{ close}">
        <div class="flex h-6 justify-between">
          <h6>时间：20223-04-09</h6>
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
let tableData=reactive<any>([
  {
    label: "文件名",
    originalFile: "",
    resultFile: "",
    key:'name'
  },
  {
    label: "文件大小",
    originalFile: "",
    resultFile: "",
    key:'momery'
  },
  {
    label:"文件类型",
    originalFile:'',
    resultFile:'',
    key:'type'
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
  console.log(res);
  
  if(res.code){

  }
}
</script>

<style scoped>

</style>
