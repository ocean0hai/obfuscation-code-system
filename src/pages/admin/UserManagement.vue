<script lang="ts" setup>
import Table from '@/components/admin/Table.vue';
import { ref,onMounted,getCurrentInstance } from 'vue';
import AdminDialog from '@/components/admin/AdminDialog.vue';
import Search from '@/components/common/Search.vue';
import { userType } from '@/type/table';
import { Icon } from '@iconify/vue';
import { api } from '@/api/request';
import { objType,formType } from '@/type';
import AdminForm from '@/components/admin/AdminForm.vue';
const childRef:any=ref(null)
//初始化数据
onMounted(()=>{
  getUser(1)
})
const data=ref<Array<userType>>([])
const userTotal=ref<number>(1)
const columns=ref([
  {
    key:'id',
    label:'id',
    dataIndex:'id'
  },
  {
    key:'username',
    label:'账号',
    dataIndex:'username'
  },
  {
    key:'phone',
    label:'电话',
    dataIndex:'phone'
  },
  {
    key:'password',
    label:'密码',
    dataIndex:'password'
  },
  {
    key:'email',
    label:'邮箱',
    dataIndex:'email'
  },
  {
    key:'state',
    label:'登录状态',
    dataIndex:'state'
  }
])
//得到数据表
async function getUser(num:number,name=''){
  const res:any=await api.get('/user/page',{
    params:{
      pageNum:num,
      pageSize:10,
      username:name
    }
  })
  if (res.code===200) {
    const {total,records}=res.data
    data.value=records
    userTotal.value=total 
  }
}
//操作
async function submitForm(data:objType){
  childRef.Colse()
}
async function deleteData(item:objType){
  console.log(item.id);
  // const res:any=await api.delete(`/api/file/remove/user/${id}`)
}
function handleCurrent(val:number){
  getUser(val) 
}

async function  searchUser(value:string) {
  if (value==='') {
    getUser(1) 
  }else{
    getUser(1,value)
  }
}

</script>

<template>
  <div>
    <!-- 搜索按钮 -->
    <div>
      <div class="w-full h-12">
        <div class="w-1/3 float-right mr-2">
          <Search text="请输入用户id" @onChange="searchUser" />
        </div>
      </div>
    </div>
     <Table :columns="columns" :data="data">
        <template #operation="{item}">
          <div class="w-32 flex">
            <AdminDialog ref="childRef">
              <template #button>
                修改 
              </template>
              <template  #customize>
                <div class="w-full ">
                  <AdminForm :babel="data" :item="item">   
                   <template #submit="subData">
                     <button class="btn ml-16" @click="submitForm(subData.data)">确定</button>
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
        @current-change="handleCurrent"
        :page-size="10"
        background 
        layout="prev, pager, next" 
        :total="userTotal" />
      </div>
    </div>
  </div>
</template>

<style scoped >

</style>