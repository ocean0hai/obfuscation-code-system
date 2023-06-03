<script lang="ts" setup>
import { reactive,defineProps, ref } from 'vue';
import { ElMessage, genFileId } from 'element-plus'
import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus'
import Table from './Table.vue';
import { dataType } from '@/type/table';
import { uploadStore } from '@/store';
import { api } from '@/api/request';
const store=uploadStore()
let fileList=reactive([])
let tableData=reactive<any>([
  {
    name: "文件名",
    content: "",
  },
  {
    name: "文件大小",
    content: "",
  },
  {
    name: "文件类型",
    content: "",
  }
])

const upload = ref<UploadInstance>()

const handleExceed: UploadProps['onExceed'] = (files) => {
  upload.value!.clearFiles()
  const file = files[0] as UploadRawFile
  file.uid = genFileId()
  upload.value!.handleStart(file)
}

const submitUpload = () => {
  upload.value!.submit()
}

function handleChange(files:any) {
  if(files.target.files.length !== 1){
    ElMessage.warning('只能上传一个文件！')
    return ;
  }
  const file=files.target.files[0]
  
  uploadFile(file)
  const index=file.name.lastIndexOf(".")
  const [fileName,filetype ]=[file.name.substring(0,index),file.name.substring(index+1)]

  let nBytes = file.size;
  const aMultiples = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  let count=-1
  while(nBytes>1024){
    count++
    nBytes/=1024
  }
  tableData[0].content = fileName;
  tableData[1].content = nBytes+(count===-1 ? 'B':aMultiples[count]);
  tableData[2].content = filetype;
}

async function  uploadFile(file:any) {
  const res:any = await api.post('/api/file/upload',{
    file:file
  },
  {
    headers:{
      'Content-Type':'multipart/form-data'
    }
  }) 
  if (res?.code===200) {
     store.changUpload(res.data.name)
    ElMessage.success('上传成功！！')
  }
}

</script>

<template>
  <div class="">
     <div class="mx-auto my-5">
      <h2>请上传需要保护的文件</h2>
      <!-- action="http://8.130.113.197:8080/api/file/upload" -->
      <input
        type="file"
        class="upload-demo"
        @change="handleChange"
        :limit="1"
      />
        <!-- <el-button size="small" type="primary">选择文件</el-button> -->
        <div slot="tip" class="text-red-500">*支持.c...格式(只能上传单个文件)</div>

      </div>
      <div>
        <Table :data="tableData"></Table>
      </div>
  </div>
</template>

<style scoped >

</style>