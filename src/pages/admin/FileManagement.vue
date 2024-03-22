<script lang="ts" setup>
import Table from '@/components/admin/Table.vue';
import { ref,onMounted } from 'vue';
import {columnsType,fileType} from '@/type/table'
import { getTableDate } from '@/hooks/getData';
import Search from '@/components/common/Search.vue';
import { api } from '@/api/request';
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
const {
  getData,
  datatotal,
  deleteData,
  searchData,
  data,
  handleCurrent
}=getTableDate('/api/file/page')

onMounted(() => {
 getData()
})

</script>

<template>
  <div>
    <div>
      <div class="w-full h-12">
        <div class="w-1/3 float-right mr-2">
          <Search text="请输入文件名" @onChange="searchData"/> 
        </div>
      </div>
    </div>
    <Table :columns="columns" :data="data">
        <template #operation="{item}">
          <div class="w-20 text-center">
            <button class="btn mx-2 " @click="deleteData(item.id)">删除</button>        
          </div>
        </template> 
     </Table>
    <div class="w-full mt-10">
      <div class=" w-96 mx-auto ">
        <el-pagination 
        class="w-full" 
        @current-change="handleCurrent"
        background 
        layout="prev, pager, next" 
        :total="datatotal" />
      </div>
    </div>
  </div>
</template>

<style scoped >

