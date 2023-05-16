<script lang="ts" setup>
import { api } from '@/api/request';
import AdminDialog from '@/components/admin/AdminDialog.vue';
import { Codemirror } from 'vue-codemirror';
import CodeEditor from '@/components/common/CodeEditor.vue'
import { onMounted, ref } from 'vue';
const file=ref<any>(null)
onMounted(()=>{
  
})
const fileContent=ref<any>(null)

async function readFlie(){
  //6792d589-c6fb-4451-a1db-a5af48324b5b_flatten.c
  //09ba81a0-69e0-4a28-b03d-90f97ffbf396_flatten.c
  const res:any=await api.get(`/api/file/download/${'	55f43915-3bf3-4aa5-9c94-5c081204846f_flatten.c'}`,{
    responseType:'blob'
  }).then(res=>{
    file.value=res.data
  })
}
</script>

<template>
  
  <div>
    <CodeEditor>

    </CodeEditor>
  </div>
</template>

<style scoped >

</style>