<script lang="ts" setup>
import Table from '@/components/admin/Table.vue';
import { ref,onMounted } from 'vue';
import {columnsType,fileType} from '@/type/table'
import AdminForm from '@/components/admin/AdminForm.vue';
import { api } from '@/api/request';
import AdminDialog from '@/components/admin/AdminDialog.vue';
import { Icon } from '@iconify/vue';
const columns=ref<Array<columnsType>>([
  {
    key:'id',
    dataIndex:'id',
    label:'id'
  },
  {
    key:'name',
    dataIndex:'name',
    label:'文件名'
  },
  {
    key:'type',
    dataIndex:'type',
    label:'文件类型'
  },
  {
    key:'memory',
    dataIndex:'memory',
    label:'文件大小'
  },
  {
    key:'store',
    dataIndex:'store',
    label:'存储地址'
  },
  {
    key:'createTime',
    dataIndex:'createTime',
    label:'时间'
  }
])
const data=ref<Array<fileType>>([])
const fileTotal=ref<number>(1)

onMounted(() => {
  getFileList(1)  
})
async function  getFileList(num:number) {
  const res:any=await api.get('/api/file/manage',{
    params:{
      page:num,
      limit:10
    }
  }) 
  
  if (res.code===200) {
    const {records,total}=res.data
    data.value=records 
    fileTotal.value=total
    console.log(records);
    
  } 
}

function submitForm(item:any){
  // const res:any=await api.post('/change/file',{
  //    ...data
  // })
}
async function deleteData(item:any){
  console.log(item);
  // const res:any=await api.delete(`/api/file/remove/fileId/${id}`)
  // if(res.code==200) ElMessage.success('删除成功！')
}
function handleCurrentChange(val:any){
  getFileList(val)
}
const searchValue=ref<string>('')
async function searchFile() {
  console.log(searchValue);
  const res:any= await api.get(`/api/file/id/${searchFile}`)
  
}
</script>

<template>
  <div>
    <div>
      <div class="w-full h-12">
        <div class="w-1/3 float-right mr-2">
          <el-input  v-model="searchValue" @change="searchFile" class="w-50 m-2" placeholder="输入文件Id">
            <template #prefix>
              <Icon icon="material-symbols:search" ></Icon>
            </template>
          </el-input>
        </div>
      </div>
    </div>
    <Table :columns="columns" :data="data">
        <template #operation="{item}">
          <div class="w-32 flex">
            <AdminDialog>
              <template #button>
                修改 
              </template>
              <template  #customize>
                <div class="w-full ">
                  <AdminForm :babel="data" :item="item">   
                   <template #submit="{data}">
                     <button class="btn ml-16" @click="submitForm(data)">确定</button>
                   </template>
                  </AdminForm>   
                </div>
              </template>
            </AdminDialog>
            <button class="btn mx-2 " @click="deleteData(item)">删除</button>        
          </div>
        </template> 
     </Table>
    <div class="w-full mt-10">
      <div class=" w-96 mx-auto ">
        <el-pagination 
        class="w-full" 
        @current-change="handleCurrentChange"
        background 
        layout="prev, pager, next" 
        :total="fileTotal" />
      </div>
    </div>
  </div>
</template>

<style scoped >

</style>