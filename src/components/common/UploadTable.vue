<script lang="ts" setup>
import { reactive,defineProps, ref } from 'vue';
import { genFileId } from 'element-plus'
import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus'
import Table from './Table.vue';
import { dataType } from '@/type/table';
import { uploadStore } from '@/store';
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

function handleChange(file:any) {
  // let [fileName,filetype ]= file.name.split(".");
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
  store.changUpload(filetype,fileName)
}
function beforeFileUpload(res:any){
console.log(res);

}

function onSuccess(response: any){
   console.log(response);
   
}
function onError(res:any){
  console.log(res);
  
}
</script>

<template>
  <div class=" ">
     <div class="mx-auto">
      <h2>请上传需要保护的文件</h2>
      <!-- action="http://8.130.113.197:8080/api/file/upload" -->
      <el-upload
        v-model:file-list="fileList"
        action="http://8.130.113.197:8080/api/file/upload"
        :auto-upload="false"
        class="upload-demo"
        :limit="1"
        :on-change="handleChange"
        :before-upload="beforeFileUpload"
        :on-success='onSuccess'
        :on-error="onError"
      >
        <el-button size="small" type="primary">选择文件</el-button>
        <template #tip>
          <div  class="el-upload__tip">
            *支持.c...格式
          </div>
        </template>
      </el-upload>
      </div>
      <div>
        <Table :data="tableData"></Table>
      </div>
  </div>
</template>

<style scoped >

</style>